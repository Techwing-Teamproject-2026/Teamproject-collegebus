package com.example.demo.controller;

import com.example.demo.dto.StudentBusChatRequest;
import com.example.demo.dto.StudentBusChatResponse;
import com.example.demo.service.StudentChatService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/chat")
@CrossOrigin(origins = "*")
public class StudentChatController {

    private final StudentChatService studentChatService;

    public StudentChatController(StudentChatService studentChatService) {
        this.studentChatService = studentChatService;
    }

    @PostMapping
    public ResponseEntity<StudentBusChatResponse> chat(
            @RequestBody StudentBusChatRequest request) {

        StudentBusChatResponse response =
                studentChatService.chat(request);

        return ResponseEntity.ok(response);
    }
}