import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from './firebaseConfig';
import { JobformComponent } from './jobform/jobform.component';
import { JoblistComponent } from './joblist/joblist.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ToastyModule} from 'ng2-toasty';
import {HelperService} from './services/helper.service';

const routes: Routes = [
  { path: 'post-job', component: JobformComponent },
  { path: 'jobs', component: JoblistComponent },
  {path: '**', redirectTo: '/jobs'}
  ];
@NgModule({
  declarations: [
    AppComponent,
    JobformComponent,
    JoblistComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ToastyModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
