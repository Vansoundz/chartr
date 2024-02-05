using chartr.api.DataContext;
using chartr.api.Models.Dto;
using chartr.api.Services.Interface;
using chartr.api.Models;
using Microsoft.EntityFrameworkCore;

namespace chartr.api.Services;

public class SongsService: ISongsService
{
    private readonly SongsDbContext _dbContext;
    public SongsService(SongsDbContext dbContext){
        _dbContext = dbContext;
    }
    public async Task<List<Song>> GetAllSongs(){
        var songs = await _dbContext.Songs.ToListAsync();
        return songs;
    }
    public async Task<Song> AddSong(AddSongDto song){
        Song newSong = new Song{
            Artist = song.Artist,
            Genre = song.Genre,
            Plays = song.Plays,
            Title = song.Title,
        };

        await _dbContext.Songs.AddAsync(newSong);
        await _dbContext.SaveChangesAsync();
        return newSong;
    }
    public long CalculateFactorialId(int id){
        if(id == 1) return 1;
        if(id < 1) return 1;
        return id * CalculateFactorialId(id - 1);
    }
}
