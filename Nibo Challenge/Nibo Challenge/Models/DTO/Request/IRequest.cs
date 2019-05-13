using System.Collections.Generic;

namespace Nibo_Challenge.Models.DTO.Request
{
    public interface IRequest
    {
        void IsValid(IList<string> listNotifications);
    }
}
