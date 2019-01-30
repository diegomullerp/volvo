using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using volvo.Models;

namespace volvo.Controllers
{
    [Produces("application/json")]
    [Route("api/Truck")]
    public class TruckController : Controller
    {
        private readonly Context _context;

        public TruckController(Context context)
        {
            _context = context;
        }

        [HttpGet("getTrucks")]
        public async Task<IActionResult> GetTrucks()
        {
            try
            {
                var trucks = _context.Truck.ToList();
                return Ok(trucks);
            }
            catch
            {
                return BadRequest();
            }
        }

       
        //POST: api/truck/addTruck
        [HttpPost("addTruck")]
        public async Task<IActionResult> AddTruck(Truck item)
        {
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTrucks), new { id = item.Id }, item);
        }
    }
}