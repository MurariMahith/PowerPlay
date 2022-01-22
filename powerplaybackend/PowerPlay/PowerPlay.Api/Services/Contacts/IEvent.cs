using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PowerPlay.Api.Models;

namespace PowerPlay.Api.Services.Contacts
{
    public interface IEvent
    {
        Task<IEnumerable<Event>> GetEventsAsync();
        Task<bool> AddEvent(Event eventEntity);
        Task<bool> UpdateEvent(Event eventEntity);
        Task<bool> RemoveEvent(long eventId);
    }
}
