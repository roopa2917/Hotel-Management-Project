using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Models
{
    public class Owner
    {   [Key]
        public string Email { get; set; }
        public string Password { get; set; }
        public string Designation { get; set; }

    }
}
