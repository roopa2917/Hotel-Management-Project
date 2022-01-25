using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Models
{
    public class Guest
    {
      [Key]

      public int gu_id { get; set; }

      public  long Phone_no { get; set; }

      public string Company { get; set; }

      public  string Name { get; set; }

      public  string Email { get; set; }

      public  string Gender { get; set; }

      public string Address { get; set; }
     
    }
}