import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface ChatRequest {
  sessionId: string;
  student: {
    studentId: number;
    studentName: string;
    registrationNumber: string;
  };
  question: string;
}

export interface ChatResponse {
  answer: string;
  intent: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl = 'http://localhost:8085/api/v1/chat';

  constructor(private http: HttpClient) { }

  sendMessage(request: ChatRequest): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.apiUrl, request);
  }
}
