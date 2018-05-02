import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {HelperService} from '../services/helper.service';

@Component({
  selector: 'app-jobform',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.css']
})
export class JobformComponent implements OnInit {
  jobForm:any;
  constructor(private Helper:HelperService,private FormBuilder:FormBuilder,private db: AngularFireDatabase) { }

  postForm(){
    if(!this.jobForm.valid){
      this.Helper.createMessage("Fill the form",null,"error")
      return
    }
    this.db.list("jobs").push(this.jobForm.value).then((
    )=>{
      this.Helper.createMessage('Added',null,'success')
      this.jobForm.reset()
    })
  }
  ngOnInit() {
    this.jobForm = this.FormBuilder.group({
      "title":[null,Validators.compose([Validators.required])],
      "description":[null,Validators.compose([Validators.required])],
      "contractType":[null,Validators.compose([Validators.required])],
      "contact":[null,Validators.compose([Validators.required])]
    })
  }


}
