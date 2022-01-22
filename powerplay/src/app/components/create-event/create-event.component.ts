import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/Event';
import { ClubService } from 'src/app/services/club-service.service';
import { EventService } from 'src/app/services/event.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  constructor(private clubService : ClubService, private eventService : EventService, private router : Router) { }

  newEvent : Event = new Event();

  oneDayEvent : boolean = false;
  inviteAllEmployees : boolean = false;

  allClubs : any = [];
  clubs : Object[] = [];
  loading : boolean = false;

  loggedInUser : User = new User()

  ngOnInit() {

    this.newEvent.startDate = "11/17/2021"
    this.newEvent.endDate = "11/17/2021"
    this.newEvent.startTime = "2:00 PM"
    this.newEvent.endTime = "3:00 PM"

    this.clubService.getAllClubs().subscribe(res => {
      this.allClubs = res;
      this.allClubs.forEach(element => {
        this.clubs.push(
          { 
            "name" : element["name"],
            "id" : element["id"]
          });
      });
      console.log(this.clubs);
      this.loading = true
    });
  }

  onSubmit()
  {
    if(this.newEvent.eventType = "1")
    {
      this.newEvent.eventType = "Public";
    }
    else
    {
      this.newEvent.eventType = "Private";
    }

    if(this.newEvent.mode = "1")
    {
      this.newEvent.mode = "Online";
    }
    else
    {
      this.newEvent.mode = "Offline";
    }

    console.log(this.newEvent);
    this.newEvent.host = this.loggedInUser.Id;
    
    this.eventService.createEvent(this.newEvent).subscribe(res => {
      if(res)
      {
        this.router.navigateByUrl('/home');
      }
    });
  }

}
