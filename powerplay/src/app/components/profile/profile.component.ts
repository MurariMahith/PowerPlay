import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/Models/Club';
import { User } from 'src/app/Models/User';
import { Event } from 'src/app/Models/Event';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService : ProfileService) { }

  loggedInUser : User = new User();

  canCreateClubs : boolean = false;
  canCreateEvents : boolean = false;
  schoolMode : boolean = false;

  clubsUserIsPartOf : Club[] = [];
  clubsUserCreated : Club[] = []; 
  presidentforClubs : Club[] = [];
  eventsUserCreated : Event[] = []
  eventsUserEnrolled : Event[] = []
  eventsUserAttended: Event[] = []


  activityScore : Number = 0;

  ngOnInit() {

    if(this.loggedInUser.role === 'Employee' || this.loggedInUser.role === 'Teacher' || this.loggedInUser.role === 'Studenthead' || this.loggedInUser.role === 'Management')
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

    this.clubsUserIsPartOf = this.userService.getClubsUserIsPartOf(this.loggedInUser);
    this.clubsUserCreated = this.userService.getClubsUserCreated(this.loggedInUser);
    this.presidentforClubs = this.userService.getClubsUserIsPresidentFor(this.loggedInUser);
    this.eventsUserCreated = this.userService.getEventsUserCreated(this.loggedInUser);
    this.eventsUserEnrolled = this.userService.getEventsUserEnrolled(this.loggedInUser);
    this.eventsUserAttended  = this.userService.getEventsUserAttended(this.loggedInUser);

    this.activityScore = this.loggedInUser.clubsUserCreated.length * 50 + 
            this.loggedInUser.clubsUserIsPartOf.length * 10 + 
            this.loggedInUser.eventsUserCreated.length * 20 +
            this.loggedInUser.eventsUserEnrolled.length * 5 +
            this.loggedInUser.eventsUserParticipated.length * 10 +
            this.loggedInUser.presidentforClubs.length *10;

  }

}
