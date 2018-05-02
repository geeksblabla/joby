import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {ToastyService} from 'ng2-toasty';

@Injectable()
export class HelperService {

  public currentUser: any = {};
  public userDetailChanged = new Subject();

  constructor(private toastyService: ToastyService) {
  }

  createMessage(title: string, msg: string, type: string, time?: number) {
    this.toastyService[type]({
      title: title,
      msg: msg,
      showClose: true,
      timeout: time || 5000,
      theme: 'bootstrap'
    });
  }


}
