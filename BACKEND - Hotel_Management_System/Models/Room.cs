using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Models
{
    public class Room
    {    [Key]
        public int Room_no { get; set; }
       


        public string type { get; set; }
      
       
       
        public string Room_image { get; set; }

       
        

    }
}
