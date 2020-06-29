using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Sickly.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestAgainController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing"
        };

        private readonly ILogger<TestAgainController> _logger;

        public TestAgainController(ILogger<TestAgainController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Summaries);
        }
    }
}
