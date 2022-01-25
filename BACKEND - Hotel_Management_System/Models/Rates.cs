using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Models
{
    public class Rates
    {
        [Key]
        public string type { get; set; }

        public int no_of_day { get; set; }
        public int no_of_guests { get; set; }
        public double first_night_price { get; set; }
        public double Extension_price { get; set; }
        public double taxes { get; set; }
       

    }
}
