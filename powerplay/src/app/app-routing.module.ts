import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubPageComponent } from './components/club-page/club-page.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { CreateClubComponent } from './components/create-club/create-club.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { ErgComponent } from './components/erg/erg.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { EventsComponent } from './components/events/events.component';
import { FindComponent } from './components/find/find.component';
import { HomeComponent } from './components/home/home.component';
import { InsightsComponent } from './components/insights/insights.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: 'home',  component: HomeComponent },
  {path: 'find',  component: FindComponent },
  {path: 'events',  component: EventsComponent },
  {path: 'clubs',  component: ClubsComponent },
  {path: 'erg',  component: ErgComponent },
  {path: 'profile',  component: ProfileComponent },
  {path: 'event1',  component: EventPageComponent },
  {path: 'event/:key',  component: EventPageComponent },
  {path: 'club1',  component: ClubPageComponent },
  {path: 'club/:key',  component: ClubPageComponent },
  {path: 'createEvent',  component: CreateEventComponent },
  {path: 'createClub',  component: CreateClubComponent },
  {path: 'insights',  component: InsightsComponent },
  {path: 'erg',  component: ErgComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
