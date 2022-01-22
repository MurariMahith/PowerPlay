import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Club } from '../Models/Club';
import {Inject} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http : HttpClient) { }

  createClub(club : Club)
  {
    return this.http.post("https://localhost:44364/api/Club/add", club);
  }

  getAllClubs()
  {
    return this.http.get("https://localhost:44364/api/Club/getall")
  }

  updateClub(club : Club)
  {
    this.http.post("https://localhost:44364/api/Club/update", club);
  }

  deleteClub(club : Club)
  {
    this.http.post("https://localhost:44364/api/Club/remove", club.id);
  }

}
