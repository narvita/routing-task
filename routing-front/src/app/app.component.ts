import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private userService: UsersService) {
    
  }
  ngOnInit(): void {
    console.log(this.userService.getUsers())
    ;
    
  }
}
