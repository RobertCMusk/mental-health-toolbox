import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmotionPickerComponent } from './emotion-picker/emotion-picker.component';
import { ActionPickerComponent } from './action-picker/action-picker.component';
import { ComfortComponent } from './comfort/comfort.component';
import { ConnectionComponent } from './connection/connection.component';
import { SillinessComponent } from './silliness/silliness.component';
import { SilenceComponent } from './silence/silence.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    EmotionPickerComponent,
    ActionPickerComponent,
    ComfortComponent,
    ConnectionComponent,
    SillinessComponent,
    SilenceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
