using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Models
{
    public class Reservations
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int res_id { get; set; }
        public int no_of_child { get; set; }
        public int no_of_adults { get; set; }
        public string check_in_date { get; set; }
        public string check_out_date { get; set; }
        public string status { get; set; }
        public int number_of_nights { get; set; }

        [ForeignKey("gu_id")]
        public int gu_id { get; set; }
      

        [ForeignKey("room_no")]
        public int room_no { get; set; }
        
        
    }
}
