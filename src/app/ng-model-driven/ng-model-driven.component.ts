import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-ng-model-driven',
  templateUrl: './ng-model-driven.component.html',
  styleUrls: ['./ng-model-driven.component.css']
})
export class NgModelDrivenComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  userForm: FormGroup

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name: ['Luxprotoss',Validators.required],
      email: [],
      address: this._formBuilder.group({
        street: [],
        city: [],
        postalcode: []
      })
    })

  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
