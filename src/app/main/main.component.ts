import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddprodComponent } from '../addprod/addprod.component';
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


  constructor(
    public _matDialog: MatDialog,
    private _commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.invData = this._commonService.invData;
  }


  totalCount() {
    return this._commonService.invData.length;
  }

  addProd()
  {
    const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;


      const dialogRef = this._matDialog.open(AddprodComponent,dialogConfig);

      dialogRef.afterClosed().subscribe((data: any) => {

        console.log(data);

        let add_data={
          "Id": this._commonService.invData.length,
          "Name":data.name,
          "Description":data.description,
          "Price":data.price
        }

        if (data) {
          this._commonService.invData.push(add_data);
          console.log(this._commonService.invData);
        }
        else {
          console.log('Data not returned after delete')
        }
      }
      );
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

  edit(id, name, description, price) {

    this._commonService.invData.find((values) => {

      if (values.Id == id) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
          Id: id,
          Name: name,
          Description: description,
          Price: price,
        };
        const dialogRef = this._matDialog.open(EditComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data: any) => {
          console.log("Dialog output:", data)
          if (data) {
            values.Name = data.name;
            values.Description = data.description;
            values.Price = data.price;
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
