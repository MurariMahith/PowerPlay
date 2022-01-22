import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from 'src/app/Models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient) { }

  createEvent(event : Event)
  {
    console.log(event);
     return this.http.post("https://localhost:44364/api/Events/add", event);
  }

  getAllEvents()
  {
    return this.http.get("https://localhost:44364/api/Events/getall");
  }

  updateEvent(event : Event)
  {
    this.http.post("fakeurl", event);
  }

  deleteEvent(event : Event)
  {
    this.http.post("fakeurl", event.id);
  }
}
