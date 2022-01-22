import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ClubService } from 'src/app/services/club-service.service';
import { CATEGORIES } from 'src/app/StaticContent/Categories';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private clubService : ClubService) { }

  paramsInUrl = {};

  showAll : boolean = false;
  enrolled : boolean = false;

  allClubs : any = [];

  allCategories = CATEGORIES;

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      //console.log(params['params']);
      this.paramsInUrl = params['params']
    });

    console.log(this.paramsInUrl)
    if(this.paramsInUrl['showAll'] == 'true')
    {
      this.showAll = true;
    }
    if(this.paramsInUrl['enrolled'] == 'true')
    {
      this.enrolled = true;
    }

    this.clubService.getAllClubs().subscribe(res => {
      this.allClubs = res[0];
      this.allClubs = res;
      console.log(this.allClubs)
    });

  }

}
