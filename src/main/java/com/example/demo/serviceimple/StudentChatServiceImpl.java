package com.example.demo.serviceimple;

import com.example.demo.client.FastApiChatClient;
import com.example.demo.dto.StudentBusChatRequest;
import com.example.demo.dto.StudentBusChatResponse;
import com.example.demo.service.StudentChatService;
import org.springframework.stereotype.Service;

@Service
public class StudentChatServiceImpl implements StudentChatService {

    private final FastApiChatClient fastApiChatClient;

    public StudentChatServiceImpl(FastApiChatClient fastApiChatClient) {
        this.fastApiChatClient = fastApiChatClient;
    }

    @Override
    public StudentBusChatResponse chat(StudentBusChatRequest request) {
        return fastApiChatClient.chat(request);
    }
}