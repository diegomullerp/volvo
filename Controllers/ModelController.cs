using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using volvo.Models;

namespace volvo.Controllers
{
    [Produces("application/json")]
    [Route("api/Model")]
    public class ModelController : Controller
    {
        private readonly Context _context;

        public ModelController(Context context)
        {
            _context = context;
        }

        [HttpGet("getModels")]
        public async Task<IActionResult> GetModels()
        {
            try
            {
                var models = _context.Model.ToList();
                return Ok(models);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}