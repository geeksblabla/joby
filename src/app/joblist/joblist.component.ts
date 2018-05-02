import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import {Router} from '@angular/router';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {

  items: any=[];
  constructor(db: AngularFireDatabase,private Router:Router) {
    this.items = db.list('jobs');

  }
  navigateToJobForm(){
    this.Router.navigate(['/post-job'])
  }
  navigateToJobLogin(){
    this.Router.navigate(['/login'])
  }
  ngOnInit() {
  }

}
