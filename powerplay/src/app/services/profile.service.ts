import { Injectable } from '@angular/core';
import { Club } from '../Models/Club';
import { User } from '../Models/User';
import { Event } from '../Models/Event';
import { ClubService } from './club-service.service';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private clubService : ClubService, private eventservice : EventService) {

    // this.clubService.getAllClubs();

   }

  //loggedInUser : User = new User();

  allClubs : Club[] = [];
  allEvents : Event[] = [];

  getClubsUserIsPartOf(loggedInUser : User)
  {
    var arr = [];
    this.allClubs.forEach(c => {
      if(loggedInUser.clubsUserIsPartOf.includes(c.id))
      {
        arr.push(c);
      }
    });
    return arr;
  }

  getClubsUserCreated(loggedInUser : User)
  {
    var arr = [];
    this.allClubs.forEach(c => {
      if(loggedInUser.clubsUserCreated.includes(c.id))
      {
        arr.push(c);
      }
    });
    return arr;
  }

  getClubsUserIsPresidentFor(loggedInUser : User)
  {
    var arr = [];
    this.allClubs.forEach(c => {
      if(loggedInUser.presidentforClubs.includes(c.id))
      {
        arr.push(c);
      }
    });
    return arr;
  }

  getEventsUserEnrolled(loggedInUser : User)
  {
    var arr = [];
    this.allEvents.forEach(c => {
      if(loggedInUser.eventsUserEnrolled.includes(c.id))
      {
        arr.push(c);
      }
    });
    return arr;
  }

  getEventsUserCreated(loggedInUser : User)
  {
    var arr = [];
    this.allEvents.forEach(c => {
      if(loggedInUser.eventsUserCreated.includes(c.id))
      {
        arr.push(c);
      }
    });
    return arr;
  }

  getEventsUserAttended(loggedInUser : User)
  {
    var arr = [];
    this.allEvents.forEach(c => {
      if(loggedInUser.eventsUserParticipated.includes(c.id))
      {
        arr.push(c);
      }
    });
    return arr;
  }
}
