using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PremiumCalculator.Models;
using PremiumCalculator.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PremiumCalculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PremiumCalculationController : ControllerBase
    {
        private readonly ICalculationService _calculationService;
        public PremiumCalculationController(ICalculationService calculationService)
        {
            _calculationService = calculationService;
        }
        // GET: api/<PremiumCalculationController>
        //[HttpGet("{SumInsured}/{OccupationRating}/{Age}")]
        //public IEnumerable<string> Get(int SumInsured, double OccupationRating, double Age)
        //{
        //    if (Age <= 70)
        //    {
        //        Premium premium = new();
        //        premium.Age = Age;
        //        premium.OccupationRating = OccupationRating;
        //        premium.SumInsured = SumInsured;

        //        return _calculationService.calculate(premium);
        //    }

        //    else
        //    {
        //        return new string[] { HttpStatusCode.NotAcceptable.ToString(), "Age is out of limit" };
        //    }
        //}

        [HttpPost]
        [ProducesResponseType(200, Type = typeof(decimal))]
        [ProducesResponseType(400, Type = typeof(void))]
        public IEnumerable<string> CalcutaePremium([FromBody] Premium premium)
        {
            if (premium.Age <= 70)
            {
                return _calculationService.calculate(premium);
            }

            else
            {
                return new string[] { HttpStatusCode.NotAcceptable.ToString(), "Age is out of limit" };
            }
        }


    }
}
