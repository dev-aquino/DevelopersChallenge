using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nibo_Challenge.Models.DTO.Request
{
    public class RequestProcessVictoryDTO : IRequest
    {
        public IList<int> IdsTeam { get; set; }

        public void IsValid(IList<string> listNotifications)
        {
            if (this.IdsTeam.Count <= 0)
            {
                listNotifications.Add("Invalid teams !");
            }
            
        }
    }
}
