using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
   public interface IDataReservation<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        IEnumerable<int> search(string checkin,string checkout);
        void Add(TEntity entity);
        void Delete(int entity);
        TEntity Get(int id);
    }
}
