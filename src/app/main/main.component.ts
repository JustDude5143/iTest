import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { CommonService } from '../common.service';
import { DeleteComponent } from '../delete/delete.component';
import { EditComponent } from '../edit/edit.component';
// import data from './data.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //Variable section

  public invData;
  addForm: FormGroup;
  submitted: boolean = false;
  

  constructor(
    public _matDialog: MatDialog,
    private _commonService: CommonService,
    private _httpClient:HttpClient,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.invData = this._commonService.invData;

    let numericRegex = /^-?(0|[1-9]\d*)?$/;
    this.addForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      address: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(numericRegex)]]
    });
  }

  get f() { return this.addForm.controls; }

  addFormSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }
    console.log(this.addForm.value);
    let formData = this.addForm.value;
    let add_data={
      "Id":this._commonService.invData.length + "",
      "Name": formData.name,
      "Email": formData.email,
      "Gender": formData.gender,
      "Address":formData.address,
      "Mobile":formData.mobile
    }
    console.log('hhhh');
    this._commonService.invData.push(add_data);
  }


  totalCount() {
    return this._commonService.invData.length;
  }


  delete(id, name) {
    const index = this._commonService.invData.findIndex(m => m.Id == id);
    console.log(index);
    if (index !== undefined) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        Id: id,
        Name: name
      };
      const dialogRef = this._matDialog.open(DeleteComponent, dialogConfig);
      dialogRef.afterClosed().subscribe((data: any) => {
        if (data) {
          this._commonService.invData.splice(index, 1);
          console.log(this._commonService.invData);
        }
        else {
          console.log('Data not returned after delete')
        }
      }
      );
    }
    else {
    }
  }

  
  edit(id, name, email, gender, address, mobile) {
    this._commonService.invData.find((values) => {
      if (values.Id == id) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          Id : id,
          Name : name,
          Email : email,
          Gender : gender,
          Address : address,
          Mobile : mobile
        };
        const dialogRef = this._matDialog.open(EditComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data: any) => {
          console.log("Dialog output:", data)
          if (data) {
            values.Name = data.name;
            values.Email = data.email;
            values.Gender = data.gender;
            values.Address = data.address;
            values.Mobile = data.mobile;
          }
          else {
            console.log('no data return from edit dialog')
          }
        }
        );
      }
    })
  }

}
