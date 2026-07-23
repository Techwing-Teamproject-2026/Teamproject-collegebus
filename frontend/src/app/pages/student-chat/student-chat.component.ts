import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { ChatbotService, ChatMessage, ChatRequest } from '../../services/chatbot.service';

@Component({
  selector: 'app-student-chat',
  templateUrl: './student-chat.component.html',
  styleUrls: ['./student-chat.component.css']
})
export class StudentChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  messages: ChatMessage[] = [];
  question: string = '';
  loading: boolean = false;
  errorMsg: string = '';

  studentId!: number;
  studentName!: string;
  registrationNumber!: string;
  sessionId!: string;

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit(): void {
    // Retrieve student details from sessionStorage
    const studentStr = sessionStorage.getItem('student');
    if (studentStr) {
      try {
        const student = JSON.parse(studentStr);
        this.studentId = student.studentId;
        this.studentName = student.name;
        this.registrationNumber = student.rollNo;
      } catch (e) {
        console.error("Failed to parse student data from sessionStorage", e);
      }
    }

    // Fallbacks
    if (!this.studentId) {
      this.studentId = Number(sessionStorage.getItem('studentId'));
    }
    if (!this.studentName) {
      this.studentName = sessionStorage.getItem('studentName') || 'Student';
    }
    if (!this.registrationNumber) {
      this.registrationNumber = sessionStorage.getItem('studentRollNo') || 'Unknown';
    }

    // Resolve/Generate Session ID
    let savedSessionId = sessionStorage.getItem('chatbotSessionId');
    if (!savedSessionId) {
      savedSessionId = 'session-' + this.studentId + '-' + Date.now();
      sessionStorage.setItem('chatbotSessionId', savedSessionId);
    }
    this.sessionId = savedSessionId;

    // Load message history if present in the session
    const historyStr = sessionStorage.getItem('chatbotHistory');
    if (historyStr) {
      try {
        this.messages = JSON.parse(historyStr);
      } catch (e) {
        console.error("Failed to parse chat history from sessionStorage", e);
      }
    }

    // Welcoming message fallback
    if (this.messages.length === 0) {
      this.messages.push({
        sender: 'bot',
        text: `Hello ${this.studentName}! I am your AI Bus Assistant. How can I help you with your bus tracking, schedule, or routes today?`,
        timestamp: new Date()
      });
      this.saveHistory();
    }
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  sendMessage(): void {
    if (!this.question || !this.question.trim() || this.loading) {
      return;
    }

    const userQuestion = this.question.trim();
    this.question = '';
    this.errorMsg = '';

    // Add user message
    this.messages.push({
      sender: 'user',
      text: userQuestion,
      timestamp: new Date()
    });
    this.saveHistory();

    this.loading = true;

    const requestPayload: ChatRequest = {
      sessionId: this.sessionId,
      student: {
        studentId: this.studentId,
        studentName: this.studentName,
        registrationNumber: this.registrationNumber
      },
      question: userQuestion
    };

    this.chatbotService.sendMessage(requestPayload).subscribe({
      next: (res) => {
        this.loading = false;
        this.messages.push({
          sender: 'bot',
          text: res.answer,
          timestamp: new Date()
        });
        this.saveHistory();
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = "Failed to receive response from the assistant. Please check your connection and try again.";
        console.error("Chatbot API call error:", err);
      }
    });
  }

  clearChat(): void {
    this.messages = [{
      sender: 'bot',
      text: `Hello ${this.studentName}! I am your AI Bus Assistant. How can I help you with your bus tracking, schedule, or routes today?`,
      timestamp: new Date()
    }];
    sessionStorage.removeItem('chatbotHistory');
  }

  private saveHistory(): void {
    sessionStorage.setItem('chatbotHistory', JSON.stringify(this.messages));
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
