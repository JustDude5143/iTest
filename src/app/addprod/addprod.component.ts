import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _dialogRef: MatDialogRef<AddprodComponent>,
  ) { }

  ngOnInit(): void {
    let numericRegex = /^-?(0|[1-9]\d*)?$/;
    this.addForm = this._formBuilder.group({
      
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(numericRegex)]]
    });
  }

  // convenience getter for easy access to form fields 
  get f() { return this.addForm.controls; }

  addFormSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }
    console.log(this.addForm.value);
    this._dialogRef.close(this.addForm.value)

  }


}
