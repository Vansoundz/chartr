import { Injectable } from '@angular/core';
import { ISong } from '../types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) {}

  getSongs(): Observable<ISong[]> {
    return this.http.get<ISong[]>(`${environment.apiUrl}/songs`);
  }

  calculateFactorialId(): Observable<ISong[]> {
    return this.http.get<ISong[]>(`${environment.apiUrl}/songs/factorial`);
  }
  addSong(song: Partial<ISong>){
    return this.http.post<ISong>(`${environment.apiUrl}/songs`, song);
  }

}
