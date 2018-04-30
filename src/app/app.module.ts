import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { BankaComponent } from './banka/banka.component';
import { HomeComponent } from './home/home.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';
import { RetailaComponent } from './retaila/retaila.component';
import { PortalComponent } from './portal/portal.component';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { PortalService } from './portal.service';
import { IndusaComponent } from './indusa/indusa.component'

const appRoutes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'banka', component: BankaComponent},
  { path : 'retaila', component: RetailaComponent},
  { path : 'indusa', component: IndusaComponent},
  { path : 'analytics', component: AnalyticsComponent},
  { path : 'settings', component: SettingsComponent},
  { path : 'portal', component: PortalComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BankaComponent,
    HomeComponent,
    AnalyticsComponent,
    SettingsComponent,
    RetailaComponent,
    PortalComponent,
    IndusaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, ApiService, PortalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
