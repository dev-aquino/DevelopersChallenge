using Microsoft.AspNetCore.Mvc;
using Nibo_Challenge.Models.DTO.Request;
using Nibo_Challenge.Models.DTO.Response;
using Nibo_Challenge.Models.VO;
using Repository.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Nibo_Challenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TournamentController : ControllerBase
    {
        private readonly ITeamRepository _teamRepository;

        public TournamentController(ITeamRepository teamRepository)
        {
            _teamRepository = teamRepository;
        }

        [HttpPost("RegisterTeam")]
        public ResponseDTO RegisterTeam(RequestRegisterTeamDTO request)
        {
            var result = new ResponseDTO();
            request.IsValid(result.Notifications);
            var teamsRegistered = _teamRepository.All();
            if (teamsRegistered.Count >= 8)
            {
                result.Notifications.Add("Team Limit Reached !");
            }
            if (result.Notifications.Count == 0)
            {
                result.Response = _teamRepository.Create(request.Team);
            }
            return result;
        }

        [HttpGet("RemoveRegisteredTeams")]
        public ResponseDTO RemoveRegisteredTeams()
        {
            var result = new ResponseDTO();
            var teamsForDelete = _teamRepository.All();
            _teamRepository.BulkDelete(teamsForDelete);
            result.Response = true;
            return result;
        }

        [HttpGet("CheckIfTournamentCanStart")]
        public ResponseDTO CheckIfTournamentCanStart()
        {
            var result = new ResponseDTO();
            var teamsRegistered = _teamRepository.All();
            result.Response = (teamsRegistered.Count % 4 == 0 && teamsRegistered.Count > 0);
            return result;
        }

        [HttpGet("GetTeams")]
        public ResponseDTO GetTeams()
        {
            var result = new ResponseDTO();
            var teamsRegistered = _teamRepository.All();
            if (teamsRegistered == null || teamsRegistered.Count == 0)
            {
                result.Notifications.Add("No registered team !");
            }
            else
            {
                result.Response = teamsRegistered;
            }
            return result;
        }

        [HttpPost("ProcessVictory")]
        public ResponseDTO ProcessVictory(RequestProcessVictoryDTO request)
        {
            var result = new ResponseDTO();
            request.IsValid(result.Notifications);
            if (result.Notifications.Count == 0)
            {
                var winningTeams = _teamRepository.GetByListOfIds(request.IdsTeam).ToList();
                winningTeams.ForEach(x => x.AmountWins += 1);
                _teamRepository.BulkUpdate(winningTeams);
                result.Response = winningTeams;
            }
            return result;
        }

        [HttpGet("CreateMatches")]
        public ResponseDTO CreateMatches()
        {
            var result = new ResponseDTO();
            var teams = _teamRepository.All();
            var qtdMaxWin = teams.Max(x => x.AmountWins);
            teams = teams.Where(x => x.AmountWins == qtdMaxWin).ToList();
            var quantityOfMatch = teams.Count / 2;
            var listOfMatches = new List<Match>();
            for (int i = 0; i < quantityOfMatch; i++)
            {
                var newMatch = new Match();
                var teamA = teams.FirstOrDefault();
                newMatch.Teams.Add(teamA);
                teams.Remove(teamA);
                var teamB = teams.FirstOrDefault();
                newMatch.Teams.Add(teamB);
                teams.Remove(teamB);

                listOfMatches.Add(newMatch);
            }
            result.Response = listOfMatches;
            return result;
        }
    }
}