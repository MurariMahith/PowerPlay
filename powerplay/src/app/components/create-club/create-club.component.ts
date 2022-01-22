import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/Models/Club';
import { User } from 'src/app/Models/User';
import { ClubService } from 'src/app/services/club-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.scss']
})
export class CreateClubComponent implements OnInit {

  constructor(private clubService : ClubService, private router : Router) { }

  newClub : Club = new Club();
  loggedInUser : User = new User();

  canCreateClubs : boolean = false;
  canCreateEvents : boolean = false;
  schoolMode : boolean = false;

  type = "pie3d";
  width = "500";
  height = "300";
  dataFormat = "json";
  


  ngOnInit() {

    console.log(this.newClub)

    if(this.loggedInUser.role === 'Employee' || this.loggedInUser.role === 'Teacher' || this.loggedInUser.role === 'Studenthead' || this.loggedInUser.role === 'Management' || this.loggedInUser.role === 'Talent')
    {
      this.canCreateClubs = true;
      this.canCreateEvents = true;
    }
    else if(this.loggedInUser.role === 'Student' && this.loggedInUser.presidentforClubs.length > 0)
    {
      this.canCreateEvents = true;
    }
    else
    {
      //navigate to home page or profile page
    }


    if(this.loggedInUser.role === 'Student' || this.loggedInUser.role === 'Teacher' || this.loggedInUser.role === 'Studenthead' || this.loggedInUser.role === 'Management')
    {
      this.schoolMode = true;
    }

  }

  onSubmit(club :Club)
  {

    console.log(this.newClub);



    this.clubService.createClub(this.newClub).subscribe(res => {
      if(res)
      {
        this.router.navigateByUrl('/home');
      }
    })
    //setTimeout(()=>{this.router.navigateByUrl('/home')},1000);
  }

}
