import { CanActivate, Router } from '@angular/router';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {AngularFireAuth} from 'angularfire2/auth';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AngularFireAuth, private router: Router) {}

    canActivate(): Observable<boolean> {
      return this.auth.authState
        .map(state => !!state)
        .do(authenticated => {
          console.log(authenticated)
          if (!authenticated) {
            this.router.navigate([ '/login' ]);
            return false;
          }
          return true;
      });
    }

}
@Injectable()
export class PublicGuard implements  CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.auth.authState.map(state => !state);

  }

}
