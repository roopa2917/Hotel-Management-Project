using HotelManagement.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Data
{
    public class Context:DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
        public DbSet<Bill> Bills { get; set; }
        public DbSet<Guest> Guests { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Rates> Rate { get; set; }
        public DbSet<Reservations> Reservation { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Staff_Members> Staff_Member { get; set; }
        public DbSet<Owner> Owners { get; set; }
        

    }
}
