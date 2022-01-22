using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using PowerPlay.Api.Models;
using PowerPlay.Api.Services.Contacts;

namespace PowerPlay.Api.Services.Repositories
{
    public class EventRepository:IEvent
    {
        private readonly ILogger<EventRepository> _logger;

        public EventRepository(ILogger<EventRepository> logger)
        {
            _logger = logger;
        }
        public async Task<IEnumerable<Event>> GetEventsAsync()
        {
            try
            {
                using var dbContext = new PowerPlayDevContext();
                var events = dbContext.Event
                    .Where(x => x.IsDeleted == null || x.IsDeleted == false)
                    .Select(x => x);
                return await Task.FromResult(events.ToList());
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error getting events[{exception.Message}]", exception);
                throw;
            }
        }

        public async Task<bool> AddEvent(Event eventEntity)
        {
            try
            {
                if (eventEntity == null) throw new Exception("Event Entity is empty");

                using var dbContext = new PowerPlayDevContext();
                if (!dbContext.Event.Any(x => x.Id == eventEntity.Id))
                {
                    dbContext.Event.Add(eventEntity);
                    dbContext.SaveChanges();
                    return await Task.FromResult(true);
                }

                return await Task.FromResult(false);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error adding event[{exception.Message}]", exception);
                throw;
            }
        }

        public async Task<bool> UpdateEvent(Event eventEntity)
        {
            try
            {
                using var dbContext = new PowerPlayDevContext();
                var existingEvent = dbContext.Event
                    .Where(x => x.Id == eventEntity.Id)
                    .Select(x => x)
                    .FirstOrDefault();
                if (existingEvent == null) throw new Exception("The Event not found!");
                existingEvent.AttendedMembers = eventEntity.AttendedMembers;
                existingEvent.Category = eventEntity.Category;
                existingEvent.Description = eventEntity.Description;
                existingEvent.EndDate = eventEntity.EndDate;
                existingEvent.EndTime = eventEntity.EndTime;
                existingEvent.EnrolledMembers = eventEntity.EnrolledMembers;
                existingEvent.Name = eventEntity.Name;
                existingEvent.EventType = eventEntity.EventType;
                existingEvent.Host = eventEntity.Host;
                existingEvent.Mode = eventEntity.Mode;
                existingEvent.Tags = eventEntity.Tags;
                existingEvent.Location = eventEntity.Location;
                existingEvent.IsDeleted = false;
                existingEvent.OrganizedBy = eventEntity.OrganizedBy;
                existingEvent.StartDate = eventEntity.StartDate;
                existingEvent.StartTime = eventEntity.StartTime;
                existingEvent.TotalSpots = eventEntity.TotalSpots;
                dbContext.Event.Update(existingEvent);
                dbContext.SaveChanges();
                return await Task.FromResult(true);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error modifying event[{exception.Message}]", exception);
                throw;
            }
        }

        public async Task<bool> RemoveEvent(long eventId)
        {
            try
            {
                using var dbContext = new PowerPlayDevContext();
                var existingEvent = dbContext.Event
                    .Where(x => x.Id == eventId)
                    .Select(x => x)
                    .FirstOrDefault();
                if (existingEvent == null) throw new Exception("The Event not found!");

                existingEvent.IsDeleted = true;
                dbContext.Event.Update(existingEvent);
                dbContext.SaveChanges();
                return await Task.FromResult(true);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error removing event[{exception.Message}]", exception);
                throw;
            }
        }
    }
}
