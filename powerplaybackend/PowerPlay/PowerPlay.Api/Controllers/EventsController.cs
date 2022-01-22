using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using PowerPlay.Api.Models;
using PowerPlay.Api.Services.Contacts;

namespace PowerPlay.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly ILogger<EventsController> _logger;
        private readonly IEvent _eventRepo;

        public EventsController(ILogger<EventsController> logger, IEvent eventRepo)
        {
            _logger = logger;
            _eventRepo = eventRepo;
        }

        [HttpGet("getall")]
        public async Task<IActionResult> GetAllClubs()
        {
            try
            {
                var clubs = await _eventRepo.GetEventsAsync();
                return Ok(clubs);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error getting events[{exception.Message}]", exception);
                return BadRequest(exception.Message);
            }
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddEvent(Event eventEntity)
        {
            try
            {
                var result = await _eventRepo.AddEvent(eventEntity);
                return Ok(result);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error adding event[{exception.Message}]", exception);
                return BadRequest(exception.Message);
            }
        }

        [HttpPut("update")]
        public async Task<IActionResult> UpdateEvent(Event eventEntity)
        {
            try
            {
                var result = await _eventRepo.UpdateEvent(eventEntity);
                return Ok(result);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error modifying event[{exception.Message}]", exception);
                return BadRequest(exception.Message);
            }
        }

        [HttpDelete("remove")]
        public async Task<IActionResult> RemoveEvent(long eventId)
        {
            try
            {
                var result = await _eventRepo.RemoveEvent(eventId);
                return Ok(result);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error removing event[{exception.Message}]", exception);
                return BadRequest(exception.Message);
            }
        }
    }
}
    