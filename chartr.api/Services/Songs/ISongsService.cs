using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using chartr.api.Models;
using chartr.api.Models.Dto;

namespace chartr.api.Services.Interface;
public interface ISongsService
{
    Task<List<Song>> GetAllSongs();
    Task<Song> AddSong(AddSongDto song);
    long CalculateFactorialId(int id);
}
