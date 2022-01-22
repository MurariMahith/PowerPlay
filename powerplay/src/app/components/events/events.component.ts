import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ClubService } from 'src/app/services/club-service.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private eventsService : EventService) { }

  paramsInUrl = {};

  showAll : boolean = false;

  allEvents : Event[] = [];

  ngOnInit() {


    this.route.queryParamMap.subscribe(params => {
      console.log(params['params']);
      this.paramsInUrl = params['params']
    });

    if(this.paramsInUrl && Object.keys(this.paramsInUrl).length === 0 && Object.getPrototypeOf(this.paramsInUrl) === Object.prototype)
    {
      this.showAll = true;
    }
    console.log(this.showAll);

    this.eventsService.getAllEvents().subscribe(res => {
      this.allEvents = res as Event[];
    });



  }

}
