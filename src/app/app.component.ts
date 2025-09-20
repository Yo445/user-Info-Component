import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
  import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
template: `
    <div class="user-form">
      <mat-form-field appearance="fill">
        <mat-label>Name</mat-label>
        <input matInput [(ngModel)]="user.name" placeholder="Enter name">
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Email</mat-label>
        <input matInput [(ngModel)]="user.email" placeholder="Enter email">
      </mat-form-field>
      <button mat-raised-button color="primary" (click)="addUser()">Add User</button>
    </div>
  `,
  styles: [`
    .user-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 400px;
      margin: 20px;
    }
  `]
})
export class AppComponent {
  @Output() userAdded = new EventEmitter<{ name: string; email: string }>();
  user = { name: '', email: '' };

  addUser() {
    if (this.user.name && this.user.email) {
      this.userAdded.emit({ ...this.user });
      this.user = { name: '', email: '' }; // Reset form
    }
  }
}
