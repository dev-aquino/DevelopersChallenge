using Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nibo_Challenge.Models.VO
{
    public class Match
    {
        public IList<Team> Teams { get; set; }

        public Match()
        {
            Teams = new List<Team>();
        }
    }
}
