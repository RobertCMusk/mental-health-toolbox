import { SillinessComponent } from './silliness/silliness.component';
import { SilenceComponent } from './silence/silence.component';
import { ConnectionComponent } from './connection/connection.component';
import { ComfortComponent } from './comfort/comfort.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionPickerComponent } from './action-picker/action-picker.component';
import { EmotionPickerComponent } from './emotion-picker/emotion-picker.component';

const routes: Routes = [
  { path: '', component: EmotionPickerComponent },
  { path: 'action-picker', component: ActionPickerComponent },
  { path: 'comfort', component: ComfortComponent },
  { path: 'connection', component: ConnectionComponent },
  { path: 'silence', component: SilenceComponent },
  { path: 'silliness', component: SillinessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
