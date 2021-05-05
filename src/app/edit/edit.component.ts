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
  public description;
  public price;


  constructor(
    private formBuilder: FormBuilder,
    private _commonService: CommonService,
    private _router: Router,
    private _dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {

    this.id = data.Id;
    this.name = data.Name;
    this.description = data.Description;
    this.price = data.Price;
  }
  editForm: FormGroup;
  submitted = false;
  router: any;


  ngOnInit() {
    let numericRegex = /^-?(0|[1-9]\d*)?$/;
    this.editForm = this.formBuilder.group({
      name: [this.name, Validators.required],
      description: [this.description, [Validators.required]],
      price: [this.price, [Validators.required, Validators.pattern(numericRegex)]]
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
    console.log(this.editForm.value);
    this._dialogRef.close(this.editForm.value)

  }
  

  close()
  {
    this._dialogRef.close();
  }

}
