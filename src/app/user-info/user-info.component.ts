import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  @Output() userAdded = new EventEmitter<{ name: string; email: string }>();
  user = { name: '', email: '' };

  addUser() {
    if (this.user.name && this.user.email) {
      this.userAdded.emit({ ...this.user });
      this.user = { name: '', email: '' }; // Reset form
    }
  }
}
