package com.example.demo.service;

import com.example.demo.dto.StudentBusChatRequest;
import com.example.demo.dto.StudentBusChatResponse;

public interface StudentChatService {

    StudentBusChatResponse chat(StudentBusChatRequest request);
}