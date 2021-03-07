import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {
username:string;
password:string;
  constructor() { }

  ngOnInit(): void { }
LoginUser(){
if (this.username== "AdminMad" && this.password== "Admin12")
{
console.log("Welcome")
}
}
}
