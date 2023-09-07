import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { StatsComponent } from './stats/stats.component';
import { CheckinComponent } from './checkin/checkin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    StatsComponent,
    CheckinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'register', component: RegistrationComponent},
      { path: 'stats', component: StatsComponent},
      { path: 'checkin', component: CheckinComponent},
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
