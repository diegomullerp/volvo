using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace volvo.Models
{

    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options)
            : base(options)
        { }
        public DbSet<Truck> Truck { get; set; }
        public DbSet<Model> Model { get; set; }
    }
    [Table("Truck")]
    public class Truck
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Model Model { get; set; }

       // public DbSet<Truck> Trucks { get; set; }
    }
    [Table("Model")]
    public class Model
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

}
