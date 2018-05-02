import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {HelperService} from '../services/helper.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  constructor(public FireAuth: AngularFireAuth,private Helper:HelperService,
              private FormBuilder:FormBuilder,private db: AngularFireDatabase,
              private Router:Router
  )
  {}

  login(){
   let {user,pass} = this.loginForm.value
    this.FireAuth.auth
      .signInWithEmailAndPassword(user, pass)
      .then(value => {
        this.Router.navigate(['/jobs'])
      })
      .catch(err => {
        this.Helper.createMessage("Error","bad credentials","error")
      });
  }
  ngOnInit() {
    this.loginForm = this.FormBuilder.group({
      "user":[null,Validators.compose([Validators.required])],
      "pass":[null,Validators.compose([Validators.required])],

    })
  }

}
