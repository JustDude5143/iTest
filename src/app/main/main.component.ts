import { Component, OnInit } from '@angular/core';
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
  public male:number=0;
  public female:number=0;
  public userdata;

  
  constructor(
    public _matDialog:MatDialog,
    private _commonService:CommonService
  ) { }

  
  

  ngOnInit(): void {
    this.userdata = this._commonService.userData;  
  }

  
  maleCount()
  {
    return this._commonService.userData.filter(c=>c.Gender=='Male').length;
  }
  femaleCount()
  {
    return this._commonService.userData.filter(c=>c.Gender=='Female').length;
  }


  delete(id,name)
  {
    const index = this._commonService.userData.findIndex(m=>m.Id == id); 
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
          this._commonService.userData.splice(index,1);
          console.log(this._commonService.userData);
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
    const index = this._commonService.userData.findIndex(m=>m.Id !== id); 
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
