import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  public invData =[
    {
        "Id":"1",
        "Name": "Rakesh Roshan",
        "Email": "rakesh@gmail.com",
        "Gender": "Male",
        "Address":"Pune,maharashtra,India",
        "Mobile":"9689543085"
    },
    {
        "Id":"2",
        "Name": "Nitin Shinde",
        "Email": "nitin@gmail.com",
        "Gender": "Male",
        "Address":"Mumbai, Maharashtra, India",
        "Mobile":"9689543085"
    },
    {
        "Id":"3",
        "Name": "Rakesh Roshan",
        "Email": "rakesh@gmail.com",
        "Gender": "Male",
        "Address":"Pune,maharashtra,India",
        "Mobile":"9689543085"
    },
    {
        "Id":"4",
        "Name": "Nitin Shinde",
        "Email": "nitin@gmail.com",
        "Gender": "Male",
        "Address":"Mumbai, Maharashtra, India",
        "Mobile":"9689543085"
    },
    {
        "Id":"5",
        "Name": "Kavita Rathod",
        "Email": "kavita@gmail.com",
        "Gender": "Female",
        "Address":"Mumbai, Maharashtra, India",
        "Mobile":"9689543085"
    },
    {
        "Id":"6",
        "Name": "Shweta Phutane",
        "Email": "shweta@gmail.com",
        "Gender": "Female",
        "Address":"Mumbai, Maharashtra, India",
        "Mobile":"9689543085"
    }
]

  // public userData=[
  //   {
  //     "Id":"1",
  //     "Name": "Rakesh Roshan",
  //     "Email": "rakesh@gmail.com",
  //     "Gender": "Male",
  //     "Address":"Pune,maharashtra,India",
  //     "DateOfBirth":"10 July 1995"
  // },
  // {
  //     "Id":"2",
  //     "Name": "Nitin Shinde",
  //     "Email": "nitin@gmail.com",
  //     "Gender": "Male",
  //     "Address":"Mumbai, Maharashtra, India",
  //     "DateOfBirth":"10 May 1996"
  // },
  // {
  //     "Id":"3",
  //     "Name": "Rakesh Roshan",
  //     "Email": "rakesh@gmail.com",
  //     "Gender": "Male",
  //     "Address":"Pune,maharashtra,India",
  //     "DateOfBirth":"10 July 1995"
  // },
  // {
  //     "Id":"4",
  //     "Name": "Nitin Shinde",
  //     "Email": "nitin@gmail.com",
  //     "Gender": "Male",
  //     "Address":"Mumbai, Maharashtra, India",
  //     "DateOfBirth":"10 May 1996"
  // },
  // {
  //     "Id":"5",
  //     "Name": "Kavita Rathod",
  //     "Email": "kavita@gmail.com",
  //     "Gender": "Female",
  //     "Address":"Mumbai, Maharashtra, India",
  //     "DateOfBirth":"30 Jan 1996"
  // },
  // {
  //     "Id":"6",
  //     "Name": "Shweta Phutane",
  //     "Email": "shweta@gmail.com",
  //     "Gender": "Female",
  //     "Address":"Mumbai, Maharashtra, India",
  //     "DateOfBirth":"20 May 1996"
  // }
  // ]
}
