import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserInfoComponent, UserListComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent implements OnInit {
  users: { name: string; email: string }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onUserAdded(user: { name: string; email: string }) {
    this.userService.addUser(user).subscribe((updatedUsers) => {
      this.users = updatedUsers;
    });
  }
}
