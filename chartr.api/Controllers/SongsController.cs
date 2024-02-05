using Microsoft.AspNetCore.Mvc;
using chartr.api.Models;
using chartr.api.Services.Interface;
using chartr.api.Models.Dto;

namespace chartr.api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SongsController : ControllerBase
{
    private readonly ISongsService _songsService;
    public SongsController(ISongsService songsService)
    {
        _songsService = songsService;
    }

    [HttpGet]
    public async Task<ActionResult<List<Song>>> GetSongs()
    {
        var songs = await _songsService.GetAllSongs();
        return Ok(songs);
    }

    [HttpGet("factorial")]
    public async Task<ActionResult<List<Song>>> GetFactorialId()
    {
        try
        {
            var songs = await _songsService.GetAllSongs();

            Parallel.ForEach(songs, song =>
            {
                try
                {
                    song.FactorialId = _songsService.CalculateFactorialId(song.Id);
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }
            });

            return Ok(songs);
        }
        catch (Exception ex)
        {
            return StatusCode(500, "Internal Server Error");
        }

    }


    [HttpPost]
    public async Task<ActionResult<Song>> CreateSong(AddSongDto song)
    {
        try
        {
            var added = await _songsService.AddSong(song);
            return Ok(added);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

    }
}