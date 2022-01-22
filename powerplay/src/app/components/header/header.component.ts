import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  loggedInUser : User = new User();

  schoolMode : boolean = false;

  canCreateClubs : boolean = false;
  canCreateEvents : boolean = false;

  canSeeInsights : boolean = false;

  ngOnInit() {

    if(this.loggedInUser.role === 'Student' || this.loggedInUser.role === 'Teacher' || this.loggedInUser.role === 'Studenthead' || this.loggedInUser.role === 'Management')
    {
      this.schoolMode = true;
    }

    if(this.loggedInUser.role === 'Teacher' || this.loggedInUser.role === 'Management' || this.loggedInUser.role === 'Talent')
    {
      this.canSeeInsights = true;
    }

    if(this.loggedInUser.role === 'Employee' || this.loggedInUser.role === 'Teacher' || this.loggedInUser.role === 'Studenthead' || this.loggedInUser.role === 'Management' || this.loggedInUser.role === 'Talent')
    {
      this.canCreateClubs = true;
      this.canCreateEvents = true;
    }
    else if(this.loggedInUser.role === 'Student' && this.loggedInUser.presidentforClubs.length > 0)
    {
      this.canCreateEvents = true;
    }

  }

}
