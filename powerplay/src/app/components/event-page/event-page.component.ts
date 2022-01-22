import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/Models/Event';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from 'src/app/services/club-service.service';
import { Club } from 'src/app/Models/Club';
import { User } from 'src/app/Models/User';


@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  constructor(private eventsService : EventService,private activatedRoute: ActivatedRoute,private clubService : ClubService) { }

  type = "pie3d";
  width = "500";
  height = "300";
  dataFormat = "json";
  
  dataSourceForClubVsEvents: any = {
      "chart": {
          "caption": "Participated Vs Not participated",
          "subCaption": "",
          "xAxisName": "Clubs",
          "yAxisName": "No.of Events Organised",
          "numberSuffix": "",
          "theme": "fusion"
      },
      "data": [{
          "label": "Participated",
          "value": "275"
      }, {
          "label": "Not participated",
          "value": "25"
      }]
  };

  loggedInUser : User = new User();

  showGraph : boolean = false;


  currentEvent : Event;

  allEvents : Event[] = [];
  allClubs : Club[] = [];
  organizedBy : string = '';

  ngOnInit() {

    if(this.loggedInUser.role === 'Talent' || this.loggedInUser.role === 'Management' || this.loggedInUser.role === 'Teacher')
    {
      this.showGraph = true;
    }

    var key = this.activatedRoute.snapshot.params.key;
    console.log(key)

    this.eventsService.getAllEvents().subscribe(res => {
      this.allEvents = res as Event[];
      this.allEvents.forEach(element => {
        if(element.id == key)
        {
          this.currentEvent = element;
        }
        console.log(this.currentEvent);
        this.clubService.getAllClubs().subscribe(res => {
          this.allClubs = res as Club[];
          this.allClubs.forEach(element => {
            console.log(element.id)
            if(element.id == this.currentEvent.organizedBy)
            {
              this.organizedBy = element.name;
            }
            
          });
          if(this.organizedBy == "")
          {
            this.organizedBy = "General Event"
          }
          
        });
      });
    });

    

  }

}
