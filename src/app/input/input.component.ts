import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  message: string = '';
  
  @Output() send: EventEmitter<string> = new EventEmitter<string>();

  sendMessage() {
    this.send.emit(this.message);
    this.message = '';
  }
}
