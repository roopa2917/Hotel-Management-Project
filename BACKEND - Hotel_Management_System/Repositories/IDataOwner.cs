using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
   public interface IDataOwner<TEntity>
    {
        TEntity ValidateLogin(TEntity entity);
        void Add(TEntity entity);
        IEnumerable<TEntity> GetAll();
        void Delete(string email);
        TEntity Get(string email);
        void Update(TEntity dbEntity, TEntity entity);

    }
}
