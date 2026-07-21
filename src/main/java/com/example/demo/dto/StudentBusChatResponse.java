package com.example.demo.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import java.util.List;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class StudentBusChatResponse {

    private String answer;
    private String intent;
    private String assignedBusNumber;
    private String currentLocationName;
    private Integer estimatedArrivalMinutes;
    private String estimatedArrivalTime;
    private Integer delayMinutes;
    private Double feeDue;
    private String feeDueDate;
    private Boolean dataAvailable;
    private List<String> warnings;

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getIntent() {
        return intent;
    }

    public void setIntent(String intent) {
        this.intent = intent;
    }

    public String getAssignedBusNumber() {
        return assignedBusNumber;
    }

    public void setAssignedBusNumber(String assignedBusNumber) {
        this.assignedBusNumber = assignedBusNumber;
    }

    public String getCurrentLocationName() {
        return currentLocationName;
    }

    public void setCurrentLocationName(String currentLocationName) {
        this.currentLocationName = currentLocationName;
    }

    public Integer getEstimatedArrivalMinutes() {
        return estimatedArrivalMinutes;
    }

    public void setEstimatedArrivalMinutes(Integer estimatedArrivalMinutes) {
        this.estimatedArrivalMinutes = estimatedArrivalMinutes;
    }

    public String getEstimatedArrivalTime() {
        return estimatedArrivalTime;
    }

    public void setEstimatedArrivalTime(String estimatedArrivalTime) {
        this.estimatedArrivalTime = estimatedArrivalTime;
    }

    public Integer getDelayMinutes() {
        return delayMinutes;
    }

    public void setDelayMinutes(Integer delayMinutes) {
        this.delayMinutes = delayMinutes;
    }

    public Double getFeeDue() {
        return feeDue;
    }

    public void setFeeDue(Double feeDue) {
        this.feeDue = feeDue;
    }

    public String getFeeDueDate() {
        return feeDueDate;
    }

    public void setFeeDueDate(String feeDueDate) {
        this.feeDueDate = feeDueDate;
    }

    public Boolean getDataAvailable() {
        return dataAvailable;
    }

    public void setDataAvailable(Boolean dataAvailable) {
        this.dataAvailable = dataAvailable;
    }

    public List<String> getWarnings() {
        return warnings;
    }

    public void setWarnings(List<String> warnings) {
        this.warnings = warnings;
    }
}
