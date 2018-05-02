import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from './firebaseConfig';
import {JobformComponent} from './jobform/jobform.component';
import {JoblistComponent} from './joblist/joblist.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ToastyModule} from 'ng2-toasty';
import {HelperService} from './services/helper.service';
import {LoginComponent} from './login/login.component';
import {AuthGuard, PublicGuard} from './services/auth.service';
import {AngularFireAuthModule} from 'angularfire2/auth';

const routes: Routes = [
  {path: 'post-job', component: JobformComponent, canActivate: [AuthGuard]},
  {path: 'jobs', component: JoblistComponent},
  {path: 'login', component: LoginComponent, canActivate: [PublicGuard]},
  {path: '**', redirectTo: '/jobs'}
];

@NgModule({
  declarations: [
    AppComponent,
    JobformComponent,
    JoblistComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ToastyModule
  ],
  providers: [HelperService, AuthGuard, PublicGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
