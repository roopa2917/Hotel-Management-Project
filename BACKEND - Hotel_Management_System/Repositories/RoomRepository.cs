using HotelManagement.Data;
using HotelManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
    public class RoomRepository :IDataRoom<Room>
    {
        private readonly Context _RoomDBContext;

        public RoomRepository(Context Context)
        {
            _RoomDBContext = Context;
        }
        public void AddRoom(Room entity)
        {


            _RoomDBContext.Rooms.Add(entity);
            _RoomDBContext.SaveChanges();




        }
        public IEnumerable<Room> GetAll()
        {
            return _RoomDBContext.Rooms.ToList();
        }
        public void Delete(int id)
        {
            Room room = _RoomDBContext.Rooms.Find(id);
            _RoomDBContext.Rooms.Remove(room);
            _RoomDBContext.SaveChanges();
        }
        public Room Get(int id)
        {
            return _RoomDBContext.Rooms.Find(id);
        }


        public void Update(Room dbEntity, Room entity)
        {
            dbEntity.type = entity.type;
            dbEntity.Room_image = entity.Room_image;

            _RoomDBContext.SaveChanges();
        }

        public IEnumerable<Room> getRoom(IEnumerable<int> room)
        {
          return  _RoomDBContext.Rooms.Where(r =>!room.Contains(r.Room_no)).ToList();
    
        }

        public Room  getRoomtype(int room_no)
        {
            return _RoomDBContext.Rooms.FirstOrDefault(r => r.Room_no == room_no);
        }
    }
}
