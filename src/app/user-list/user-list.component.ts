import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./user-list.component.html',
  styleUrl:'./user-list.component.css'
})
export class UserListComponent {
  @Input() users: { name: string; email: string }[] = [];

  removeUser(index: number) {
    this.users.splice(index, 1);
    this.users = [...this.users]; // Trigger change detection
  }
}
