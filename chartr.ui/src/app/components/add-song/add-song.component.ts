import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize } from 'rxjs';
import { SongsService } from 'src/app/services/songs.service';
import { ISong } from 'src/app/types';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css'],
})
export class AddSongComponent {
  title = new FormControl('', Validators.required);
  artist = new FormControl('', Validators.required);
  genre = new FormControl('', Validators.required);
  plays = new FormControl(0);
  error?: string;
  message?: string;

  songForm = new FormGroup({
    title: this.title,
    artist: this.artist,
    genre: this.genre,
    plays: this.plays,
  });

  loading = false;

  constructor(private songsService: SongsService){}

  onSubmit() {
    this.songForm.markAllAsTouched()
    if (this.songForm.valid) {
      const song = this.songForm.value as Partial<ISong>;
      if(!song.plays) song.plays = 0

      this.loading = true;

      this.songsService.addSong(song)
        .pipe(
          catchError((err) => {
            this.error = err.message;
            this.message = ""
            throw err;
          }),
          finalize(() => this.loading = false)
        )
        .subscribe(newSong => {
          this.message = "Song added successfully; Add another song"
          this.error = "";
          this.songForm.reset();
      });
    }
  }
}
