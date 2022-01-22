using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using PowerPlay.Api.Models;
using PowerPlay.Api.Services.Contacts;

namespace PowerPlay.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClubController : ControllerBase
    {
        private readonly ILogger<ClubController> _logger;
        private readonly IClub _clubRepo;
        public ClubController(ILogger<ClubController> logger, IClub clubRepo)
        {
            _logger = logger;
            _clubRepo = clubRepo;
        }

        [HttpGet("getall")]
        public async Task<IActionResult> GetAllClubs()
        {
            try
            {
                var clubs = await _clubRepo.GetClubsAsync();
                return Ok(clubs);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error getting clubs[{exception.Message}]", exception);
                return BadRequest(exception.Message);
            }
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddClub(Club clubEntity)
        {
            try
            {
                var result = await _clubRepo.AddClub(clubEntity);
                return Ok(result);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error adding club[{exception.Message}]", exception);
                return BadRequest(exception.Message);
            }
        }

        [HttpPut("update")]
        public async Task<IActionResult> UpdateClub(Club clubEntity)
        {
            try
            {
                var result = await _clubRepo.UpdateClub(clubEntity);
                return Ok(result);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error modifying club[{exception.Message}]", exception);
                return BadRequest(exception.Message);
            }
        }

        [HttpDelete("remove")]
        public async Task<IActionResult> RemoveClub(long clubId)
        {
            try
            {
                var result = await _clubRepo.RemoveClub(clubId);
                return Ok(result);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error removing club[{exception.Message}]", exception);
                return BadRequest(exception.Message);
            }
        }
    }
}
