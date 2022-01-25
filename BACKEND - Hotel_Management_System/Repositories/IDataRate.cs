using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
    public interface IDataRate<TEntity>
    {
        void Add(TEntity entity);
        IEnumerable<TEntity> GetAll();
        void Delete(string type);
        TEntity Get(string type);
        void Update(TEntity dbEntity, TEntity entity);


    }
}
