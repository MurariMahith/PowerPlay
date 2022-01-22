import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/User';
import { Event } from 'src/app/Models/Event';
import { ClubService } from 'src/app/services/club-service.service';
import { CATEGORIES } from 'src/app/StaticContent/Categories';
import { Club } from 'src/app/Models/Club';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.scss']
})
export class ClubPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private clubService : ClubService, private eventsService : EventService) { }

  president : boolean = false;

  allCategories = CATEGORIES;

  loggedInUser : User = new User();
  allClubs : Club[] = [];

  allEvents : Event[] = [];

  currentClub : Club;

  eventsByUs : Event[] = [];

  members : Number = 0;

  dataSourceForClubVsEvents: any = {
    "chart": {
        "caption": "Budget statistics",
        "subCaption": "",
        "xAxisName": "Clubs",
        "yAxisName": "No.of Events Organised",
        "numberSuffix": "",
        "theme": "fusion"
    },
    "data": [{
        "label": "Used",
        "value": "72%"
    }, {
        "label": "Not participated",
        "value": "28%"
    }]
};

  ngOnInit() {

    var key = this.activatedRoute.snapshot.params.key;
    console.log(key)



    this.clubService.getAllClubs().subscribe(res => {
      this.allClubs = res as Club[];
      console.log(this.allClubs[0]);
      this.allClubs.forEach(element => {
        if(element.id == key)
        {
          this.currentClub = element;
        }
        
      });
      this.eventsService.getAllEvents().subscribe(res => {
        this.allEvents = res as Event[];
        this.allEvents.forEach(element => {
          if(element.organizedBy == this.currentClub.id)
          {
            this.eventsByUs.push(element);
          } 
        });
      });
      this.members = this.currentClub["members"].split(",").length;
    });

  }

}
