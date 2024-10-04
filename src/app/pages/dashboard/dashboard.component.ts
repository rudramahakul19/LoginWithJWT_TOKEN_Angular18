import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  usersList:any[] = [];
  constructor(private http: HttpClient,private router: Router){}

  ngOnInit(): void {
     this.getAllUsers();
  }

  getAllUsers(){
    this.http.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers').subscribe((res:any)=>{
      this.usersList = res.data;
    }, error =>{
      alert("Error form Api");
    })
  }

 
}
