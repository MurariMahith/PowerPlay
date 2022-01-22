import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/Models/Club';
import { User } from 'src/app/Models/User';
import { Event } from 'src/app/Models/Event';
import { ClubService } from 'src/app/services/club-service.service';
import { EventService } from 'src/app/services/event.service';
import { FusionDataSource } from 'src/app/Models/FusionDataSource';
import { FusionData } from 'src/app/Models/FusionData';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {

  constructor(private clubService : ClubService, private eventsService : EventService) { }

    type1 = "bar3d";
    type2 = "bar2d";
    width = "500";
    height = "300";
    dataFormat = "json";
    
    dataSourceForClubVsEvents: any = {
        "chart": {
            "caption": "Clubs vs No.of Events",
            "subCaption": "",
            "xAxisName": "Clubs",
            "yAxisName": "No.of Events Organised",
            "numberSuffix": "",
            "theme": "fusion"
        },
        "data": [{
          "label" : "Gardening",
          "value" : "5"
        },{
          "label" : "Hiking",
          "value" : "28"
        },{
          "label" : "Cookery",
          "value" : "16"
        },{
          "label" : "Book Club",
          "value" : "20"
        },{
          "label" : "Toast Master",
          "value" : "10"
        },{
          "label" : "Painting",
          "value" : "15"
        },{
          "label" : "Music",
          "value" : "12"
        },{
          "label" : "Dramatics",
          "value" : "12"
        },{
          "label" : "Chess",
          "value" : "8"
        },{
          "label" : "Social Service",
          "value" : "17"
        }]
    };

    dataSourceForClubVsMembers: any = {
      "chart": {
          "caption": "Clubs VS Members",
          "subCaption": "",
          "xAxisName": "Clubs",
          "yAxisName": "No.of Events Organised",
          "numberSuffix": "",
          "theme": "fusion"
      },
      "data": [{
        "label" : "Gardening",
        "value" : "100"
      },{
        "label" : "Hiking",
        "value" : "200"
      },{
        "label" : "Cookery",
        "value" : "80"
      },{
        "label" : "Book Club",
        "value" : "250"
      },{
        "label" : "Toast Master",
        "value" : "150"
      },{
        "label" : "Painting",
        "value" : "130"
      },{
        "label" : "Music",
        "value" : "180"
      },{
        "label" : "Dramatics",
        "value" : "120"
      },{
        "label" : "Chess",
        "value" : "60"
      },{
        "label" : "Social Service",
        "value" : "165"
      }]
      
    };

    dataSourceForEventsVsEnrolled: any = {
    "chart": {
        "caption": "Events vs No.of Enrolled",
        "subCaption": "",
        "xAxisName": "Clubs",
        "yAxisName": "No.of Events Organised",
        "numberSuffix": "",
        "theme": "fusion"
    },
    "data": [{
      "label" : "Movie Night",
      "value" : "220"
    },{
      "label" : "Diwali Celebration",
      "value" : "180"
    },{
      "label" : "Book Fest",
      "value" : "150"
    },{
      "label" : "Hills Hiking",
      "value" : "112"
    },{
      "label" : "Badminton League",
      "value" : "82"
    },{
      "label" : "Art & Craft Fest",
      "value" : "115"
    },{
      "label" : "Music Concert",
      "value" : "215"
    },{
      "label" : "Romeo & Juliet Theatre",
      "value" : "106"
    }]
    
    };

    dataSourceForEventsVsActualAttended: any = {
      "chart": {
          "caption": "Events vs Actual Attendees",
          "subCaption": "",
          "xAxisName": "Clubs",
          "yAxisName": "No.of Events Organised",
          "numberSuffix": "",
          "theme": "fusion"
      },
      "data": [{
        "label" : "Movie Night",
        "value" : "118"
      },{
        "label" : "Diwali Celebration",
        "value" : "126"
      },{
        "label" : "Book Fest",
        "value" : "132"
      },{
        "label" : "Hills Hiking",
        "value" : "86"
      },{
        "label" : "Badminton League",
        "value" : "64"
      },{
        "label" : "Art & Craft Fest",
        "value" : "108"
      },{
        "label" : "Music Concert",
        "value" : "204"
      },{
        "label" : "Romeo & Juliet Theatre",
        "value" : "102"
      }]
      
    };

  allClubs : Club[] = [];
  allEvents : Event[] = [];
  loggedInUser : User = new User();

  ngOnInit() {

    this.clubService.getAllClubs().subscribe(res => {
      //this.allClubs = res;
    });

    this.eventsService.getAllEvents().subscribe(res => {
      //this.allClubs = res;
    });


    // Club vs Events
    var clubvsevents : FusionData[] = [];
    this.allClubs.forEach(c => {
      var obj = new FusionData();
      obj.label = c.name;
      obj.value = c.events.length.toString();
      clubvsevents.push(obj);
    });

    //this.dataSourceForClubVsEvents['data'] = clubvsevents;

    // Club vs Members
    var clubvsmembers : FusionData[] = [];
    this.allClubs.forEach(c => {
      var obj = new FusionData();
      obj.label = c.name;
      obj.value = c.members.length.toString();
      clubvsevents.push(obj);
    });

    //this.dataSourceForClubVsEvents['data'] = clubvsevents;

    // Events vs enrolled
    var eventvsenrolled : FusionData[] = [];
    this.allEvents.forEach(e => {
      var obj = new FusionData();
      obj.label = e.name;
      obj.value = e.enrolledMembers.length.toString();
      clubvsevents.push(obj);
    });

    //this.dataSourceForClubVsEvents['data'] = clubvsevents;

    // Events vs attended
    var eventvsattended : FusionData[] = [];
    this.allEvents.forEach(e => {
      var obj = new FusionData();
      obj.label = e.name;
      obj.value = e.attendedMembers.length.toString();
      clubvsevents.push(obj);
    });

    //this.dataSourceForClubVsEvents['data'] = clubvsevents;



  }

}
