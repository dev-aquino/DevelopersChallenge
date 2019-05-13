using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nibo_Challenge.Models.DTO.Response
{
    public class ResponseDTO
    {
        public IList<string> Notifications { get; set; }

        public object Response { get; set; }

        public ResponseDTO()
        {
            Notifications = new List<string>();
        }
    }
}
