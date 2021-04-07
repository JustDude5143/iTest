import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private _commonService:CommonService,
    private _router:Router
  ) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  editForm: FormGroup;
  submitted = false;
  router: any;

 
  ngOnInit() {
    this.editForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        gender: ['', [Validators.required]],
        dob: ['', Validators.required],
        address: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields 
  get f() { return this.editForm.controls; }

  editFormSubmit()
  {

      this.submitted = true;

      // stop here if form is invalid
      if (this.editForm.invalid) {
          return;
      }

      this._commonService.userData.push(this.editForm.value);
      console.log(this._commonService.userData);

  }
  btnClick()
  {
    this._router.navigate(['/login']);
  }

}
