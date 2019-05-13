using Repository.Entities;
using System.Collections.Generic;

namespace Repository.Interfaces
{
    public interface ITeamRepository
    {
        Team Create(Team team);

        void BulkDelete(IList<Team> teams);

        IList<Team> All();

        void BulkUpdate(IList<Team> teams);

        IList<Team> GetByListOfIds(IList<int> ids);
    }
}
