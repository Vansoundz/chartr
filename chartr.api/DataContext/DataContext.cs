
using Microsoft.EntityFrameworkCore;
using chartr.api.Models;

namespace chartr.api.DataContext;

public class SongsDbContext: DbContext
{
    public SongsDbContext(DbContextOptions<SongsDbContext> options)
        : base(options)
    {
    }
    public DbSet<Song> Songs { get; set; }
}
