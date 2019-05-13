using Repository.Entities;
using System;
using System.Collections.Generic;

namespace Nibo_Challenge.Models.DTO.Request
{
    public class RequestRegisterTeamDTO : IRequest
    {
        public Team Team { get; set; }

        public void IsValid(IList<string> listNotifications)
        {
            var isNameTeamValid = !string.IsNullOrEmpty(Team.Name);
            var isIdTeamValid = Team.Id == 0;
            var isAmountWinsTeamValid = Team.AmountWins == 0;
            if (isNameTeamValid == false 
                || isIdTeamValid == false
                || isAmountWinsTeamValid == false)
            {
                listNotifications.Add("Invalid registration data !");
            }
        }
    }
}
