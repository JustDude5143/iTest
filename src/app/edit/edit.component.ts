import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id;
  public name;
  public email;
  public gender;
  public address;
  public mobile;


  constructor(
    private formBuilder: FormBuilder,
    private _commonService: CommonService,
    private _router: Router,
    private _dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data.Id;
    this.name = data.Name;
    this.email = data.Email;
    this.gender = data.Gender;
    this.address = data.Address;
    this.mobile = data.Mobile;
  }
  editForm: FormGroup;
  submitted = false;
  router: any;

  ngOnInit() 
  {

    // console.log(this.id + '' + this.name + '' + this.gender + '' + this.address + '' + this.mobile);

    let numericRegex = /^-?(0|[1-9]\d*)?$/;
    this.editForm = this.formBuilder.group({
      name: [this.name, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      gender: [this.gender, Validators.required],
      address: [this.address, [Validators.required]],
      mobile: [this.mobile, [Validators.required,Validators.maxLength(10), Validators.minLength(10), Validators.pattern(numericRegex)]]
    });
  }

  // convenience getter for easy access to form fields 
  get f() { return this.editForm.controls; }

  editFormSubmit() 
  {
    this.submitted = true;
    // stop here if form is invalid
    
    if (this.editForm.invalid) 
    {
      return;
    }
    console.log(this.editForm.value);
    this._dialogRef.close(this.editForm.value)
  }
  

  close()
  {
    this._dialogRef.close();
  }

}
