using Repository.Context;
using Repository.Entities;
using Repository.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Repository.Implementations
{
    public class TeamRepository : ITeamRepository
    {
        private readonly ApplicationDbContext _context;

        public TeamRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Team Create(Team team)
        {
            var entity = _context.Teams.Add(team);
            _context.SaveChanges();
            var result = entity.Entity;
            return result;
        }

        public void BulkDelete(IList<Team> teams)
        {
            _context.Teams.RemoveRange(teams);
            _context.SaveChanges();
        }

        public IList<Team> All()
        {
            var result = _context.Teams.ToList();
            return result;
        }

        public void BulkUpdate(IList<Team> teams)
        {
            _context.Teams.UpdateRange(teams);
            _context.SaveChanges();
        }

        public IList<Team> GetByListOfIds(IList<int> ids)
        {
            var result = _context.Teams.Where(x => ids.Contains(x.Id)).ToList();
            return result;
        }
    }
}