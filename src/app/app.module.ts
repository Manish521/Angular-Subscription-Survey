import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { DataSummaryComponent } from './data-summary/data-summary.component';

import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { UserService } from './user.service';
import { ChatBoxComponent } from './data-summary/chat-box/chat-box.component';
import { ChatMessageComponent } from './data-summary/chat-box/chat-message/chat-message.component';
import { MessageService } from './data-summary/chat-box/chat-message/message.service';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'settings', component: SettingsComponent, canActivate: [ LoggedInGuard ] },
  { path: 'dataSummary', component: DataSummaryComponent, canActivate: [ LoggedInGuard ] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SettingsComponent,
    DataSummaryComponent,
    ChatBoxComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AUTH_PROVIDERS, 
    LoggedInGuard,
    UserService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
