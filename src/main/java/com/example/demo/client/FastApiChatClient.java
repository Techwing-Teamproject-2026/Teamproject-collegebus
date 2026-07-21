package com.example.demo.client;

import com.example.demo.dto.StudentBusChatRequest;
import com.example.demo.dto.StudentBusChatResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import tools.jackson.databind.ObjectMapper;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

@Component
public class FastApiChatClient {

    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;
    private final String chatUrl;

    public FastApiChatClient(
            @Value("${genai.fastapi.base-url}") String baseUrl,
            @Value("${genai.fastapi.chat-endpoint}") String chatEndpoint,
            ObjectMapper objectMapper) {

        this.objectMapper = objectMapper;
        this.chatUrl = baseUrl + chatEndpoint;

        this.httpClient = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_1_1)
                .connectTimeout(Duration.ofSeconds(10))
                .build();
    }

    public StudentBusChatResponse chat(StudentBusChatRequest request) {
        try {
            String jsonBody = objectMapper.writeValueAsString(request);

            System.out.println("Sending request to: " + chatUrl);
            System.out.println("Request JSON: " + jsonBody);

            HttpRequest httpRequest = HttpRequest.newBuilder()
                    .uri(URI.create(chatUrl))
                    .timeout(Duration.ofSeconds(30))
                    .header("Content-Type", "application/json")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
                    .build();

            HttpResponse<String> httpResponse = httpClient.send(
                    httpRequest,
                    HttpResponse.BodyHandlers.ofString()
            );

            System.out.println("FastAPI status: " + httpResponse.statusCode());
            System.out.println("FastAPI response: " + httpResponse.body());

            if (httpResponse.statusCode() < 200 ||
                    httpResponse.statusCode() >= 300) {

                throw new RuntimeException(
                        "FastAPI returned status "
                                + httpResponse.statusCode()
                                + ": "
                                + httpResponse.body()
                );
            }

            return objectMapper.readValue(
                    httpResponse.body(),
                    StudentBusChatResponse.class
            );

        } catch (InterruptedException exception) {
            Thread.currentThread().interrupt();
            throw new RuntimeException(
                    "FastAPI request was interrupted",
                    exception
            );

        } catch (Exception exception) {
            throw new RuntimeException(
                    "Failed to communicate with FastAPI: "
                            + exception.getMessage(),
                    exception
            );
        }
    }
}