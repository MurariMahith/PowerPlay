import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/Models/Club';
import { Event } from 'src/app/Models/Event';
import { User } from 'src/app/Models/User';
import { ClubService } from 'src/app/services/club-service.service';
import { EventService } from 'src/app/services/event.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private clubService : ClubService, private eventsService : EventService) { }

  allClubs : Club[] = [];
  allEvents : Event[] = [];

  loggedInUser : User = new User();

  canCreateClubs : boolean = false;
  canCreateEvents : boolean = false;
  schoolMode : boolean = false;

  ngOnInit() {

    console.log(this.loggedInUser);

    console.log(this.loggedInUser.role)

    if(this.loggedInUser.role === 'Employee' || this.loggedInUser.role === 'Teacher' || this.loggedInUser.role === 'Studenthead' || this.loggedInUser.role === 'Management' || this.loggedInUser.role === 'Talent')
    {
      this.canCreateClubs = true;
      this.canCreateEvents = true;
    }
    else if(this.loggedInUser.role === 'Student' && this.loggedInUser.presidentforClubs.length > 0)
    {
      this.canCreateEvents = true;
    }


    if(this.loggedInUser.role === 'Student' || this.loggedInUser.role === 'Teacher' || this.loggedInUser.role === 'Studenthead' || this.loggedInUser.role === 'Management')
    {
      this.schoolMode = true;
    }

    // get all clubs
    this.clubService.getAllClubs().subscribe(res => {
      this.allClubs = res as Club[];
    });

    this.eventsService.getAllEvents().subscribe(res => {
      this.allEvents = res as Event[];
    });
  }

}
