using System;
using System.ComponentModel.DataAnnotations;

namespace chartr.api.Models.Dto;

public class AddSongDto
{
    [Required]
    public string? Title { get; set; }
    [Required]
    public string? Artist { get; set; }
    [Required]
    public string? Genre { get; set; }
    [Required]
    public int Plays { get; set; }
}
