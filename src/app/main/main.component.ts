import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { EditComponent } from '../edit/edit.component';
import data from './data.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //Variable section
  public male:number=0;
  public female:number=0;

  userdata:{
    Id:number,
    Name: string,
    Email: string,
    Gender: string,
    Address:string,
    DateOfBirth: string,}[]=data

  constructor(
    public _matDialog:MatDialog
  ) { }


  ngOnInit(): void {
  }

  maleCount()
  {
    return this.userdata.filter(c=>c.Gender=='Male').length;
  }
  femaleCount()
  {
    return this.userdata.filter(c=>c.Gender=='Female').length;
  }


  delete(id,name)
  {
    const index = this.userdata.findIndex(m=>m.Id == id); 
    console.log(index);
    if(index !== undefined)
    {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
          Id: id,
          Name: name
      };
      
      // this._matDialog.open(DeleteComponent,dialogConfig);
      const dialogRef = this._matDialog.open(DeleteComponent, dialogConfig);

      dialogRef.afterClosed().subscribe((data:any)=>{
        if(data)
        {
          this.userdata.splice(index,1);
          console.log(this.userdata);
        }
        else
        {
          console.log('aaaa')
        }
      }
      );    
      
      
    }
    else
    {

    }
    
  }

  edit(id,name,email,gender,address,)
  {
    const index = this.userdata.findIndex(m=>m.Id !== id); 
    if(index !== undefined)
    {
    const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
          Id: id,
          Name: name,
          Email:email,
          Gender:gender,
          Address:address
      };
      const dialogRef=this._matDialog.open(EditComponent,dialogConfig);
      dialogRef.afterClosed().subscribe((data:any)=>{
        // console.log("Dialog output:", data)
        if(data)
        {
          
        }
        else
        {
          console.log('aaaa')
        }
      }
      );
    }
  }

}
