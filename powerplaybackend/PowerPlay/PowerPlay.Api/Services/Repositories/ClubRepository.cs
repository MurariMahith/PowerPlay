using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using PowerPlay.Api.Models;
using PowerPlay.Api.Services.Contacts;

namespace PowerPlay.Api.Services.Repositories
{
    public class ClubRepository : IClub
    {
        private readonly ILogger<ClubRepository> _logger;

        public ClubRepository(ILogger<ClubRepository> logger)
        {
            _logger = logger;
        }
        public async Task<bool> AddClub(Club clubEntity)
        {
            try
            {
                if (clubEntity == null) throw new Exception("Club Entity is empty");

                using var dbContext=new PowerPlayDevContext();
                if (!dbContext.Club.Any(x => x.Id == clubEntity.Id))
                {
                    dbContext.Club.Add(clubEntity);
                    dbContext.SaveChanges();
                    return await Task.FromResult(true);
                }

                return await Task.FromResult(false);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error adding club[{exception.Message}]", exception);
                throw;
            }
        }

        public async Task<IEnumerable<Club>> GetClubsAsync()
        {
            try
            {
                using var dbContext = new PowerPlayDevContext();
                var clubs = dbContext.Club
                    .Where(x => x.IsDeleted == null || x.IsDeleted == false)
                    .Select(x => x);
                return await Task.FromResult(clubs.ToList());
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error getting clubs[{exception.Message}]", exception);
                throw;
            }
        }

        public async Task<bool> RemoveClub(long clubId)
        {
            try
            {
                using var dbContext = new PowerPlayDevContext();
                var existingClub = dbContext.Club
                    .Where(x => x.Id == clubId)
                    .Select(x => x)
                    .FirstOrDefault();
                if (existingClub == null) throw new Exception("The Club not found!");

                existingClub.IsDeleted = true;
                dbContext.Club.Update(existingClub);
                dbContext.SaveChanges();
                return await Task.FromResult(true);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error removing club[{exception.Message}]", exception);
                throw;
            }
        }

        public async Task<bool> UpdateClub(Club clubEntity)
        {
            try
            {
                using var dbContext = new PowerPlayDevContext();
                var existingClub = dbContext.Club
                    .Where(x => x.Id == clubEntity.Id)
                    .Select(x => x)
                    .FirstOrDefault();
                if (existingClub == null) throw new Exception("The Club not found!");
                existingClub.ArchiveDate = clubEntity.ArchiveDate;
                existingClub.Category = clubEntity.Category;
                existingClub.Committee = clubEntity.Committee;
                existingClub.Description = clubEntity.Description;
                existingClub.Events = clubEntity.Events;
                existingClub.Members = clubEntity.Members;
                existingClub.Name = clubEntity.Name;
                existingClub.OpenDate = clubEntity.OpenDate;
                existingClub.President = clubEntity.President;
                existingClub.Status = clubEntity.Status;
                existingClub.Tags = clubEntity.Tags;
                existingClub.Type = clubEntity.Type;
                existingClub.IsDeleted = false;
                dbContext.Club.Update(existingClub);
                dbContext.SaveChanges();
                return await Task.FromResult(true);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Error modifying club[{exception.Message}]", exception);
                throw;
            }
        }
    }
}
