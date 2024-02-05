import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SongsService } from 'src/app/services/songs.service';
import { ISong } from 'src/app/types';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css'],
})
export class SongsListComponent implements OnInit, OnDestroy {
  songs$: Observable<ISong[]>;
  songs!: ISong[];
  error: any;
  subscription?: Subscription;
  loading = false;

  constructor(public songsService: SongsService) {
    this.songs$ = songsService.getSongs();
  }

  calculateFactorialId() {
    this.error = null;
    this.loading = true;
    this.songs = [];
    this.subscription = this.songsService.calculateFactorialId().subscribe({
      error: (err) => {
        this.error = err ?? { message: 'An error has occurred' };
        this.loading = false;
      },
      next: (songs) => {
        this.songs = songs;
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.subscription = this.songs$.subscribe({
      error: (err) => {
        this.error = err ?? { message: 'An error has occurred' };
        this.loading = false;
      },
      next: (songs) => {
        this.songs = songs;
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
