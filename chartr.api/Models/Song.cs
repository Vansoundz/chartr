using System;

namespace chartr.api.Models;
public class Song
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Artist { get; set; }
    public string? Genre { get; set; }
    public int? Plays { get; set; }
    public long? FactorialId { get; set; }
}
