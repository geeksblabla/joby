import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  authenticated:boolean=false;
  items: any=[];
  constructor(db: AngularFireDatabase,private fauth: AngularFireAuth,private Router:Router) {
    this.items = db.list('jobs');

  }
  navigateToJobForm(){
    this.Router.navigate(['/post-job'])
  }
  navigateToJobLogin(){
    this.Router.navigate(['/login']);
  }
  logout(){
    this.fauth.auth.signOut().then(()=>{
       this.authenticated = false;
    });
  }
  ngOnInit() {
    this.fauth.authState.map(state => !!state).subscribe((e)=> this.authenticated =e)
  }

}
