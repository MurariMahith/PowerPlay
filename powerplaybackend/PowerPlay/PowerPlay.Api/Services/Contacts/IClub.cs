using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using PowerPlay.Api.Models;

namespace PowerPlay.Api.Services.Contacts
{
    public interface IClub
    {
        Task<IEnumerable<Club>> GetClubsAsync();
        Task<bool> AddClub(Club clubEntity);
        Task<bool> UpdateClub(Club clubEntity);
        Task<bool> RemoveClub(long clubId);
    }
}
