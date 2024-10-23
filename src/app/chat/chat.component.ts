import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../chat.service';
import {provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {

  messages: { text: string; fromUser: boolean }[] = [];
  message: string = '';

  constructor(private chatService: ChatService) {} // Inject the service

  addMessage() {
    if (this.message) {
      this.messages.push({ text: this.message, fromUser: true });
      const userMessage = this.message; // Store user message
      this.message = ''; // Clear input after sending
      
      // Call the API to get a response
      this.chatService.getResponse(userMessage).subscribe(response => {
        this.messages.push({ text: response.reply, fromUser: false }); // Adjust based on your API response structure
      });
    }
  }

}
