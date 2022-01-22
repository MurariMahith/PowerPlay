import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { CreateClubComponent } from './components/create-club/create-club.component';
import { FindComponent } from './components/find/find.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EventsComponent } from './components/events/events.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { ErgComponent } from './components/erg/erg.component';
import { ClubPageComponent } from './components/club-page/club-page.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { InsightsComponent } from './components/insights/insights.component';

import { FusionChartsModule } from 'angular4-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Widgets from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fint'
FusionChartsModule.fcRoot(FusionCharts, Widgets, Fusion)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateEventComponent,
    CreateClubComponent,
    FindComponent,
    ProfileComponent,
    EventsComponent,
    ClubsComponent,
    ErgComponent,
    ClubPageComponent,
    EventPageComponent,
    InsightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
