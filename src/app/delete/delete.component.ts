import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  //variable section
  public id;
  public name;
  public isDelete:boolean=true;
  constructor(
    private dialogRef:MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) 
  {
    this.id=data.Id;
    this.name=data.Name;
  }

  ngOnInit(): void {
  }

  deleteTrue()
  {
    this.dialogRef.close(this.isDelete);  
  }
}
