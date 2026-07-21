package com.example.demo.dto;

import tools.jackson.databind.PropertyNamingStrategies;
import tools.jackson.databind.annotation.JsonNaming;
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)

public class StudentBusChatRequest {

    private String sessionId;
    private Student student;
    private String question;
    private AssignedBus assignedBus;
    private PickupStop pickupStop;
    private LiveTracking liveTracking;
    private Delay delay;
    private Fee fee;

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public AssignedBus getAssignedBus() {
        return assignedBus;
    }

    public void setAssignedBus(AssignedBus assignedBus) {
        this.assignedBus = assignedBus;
    }

    public PickupStop getPickupStop() {
        return pickupStop;
    }

    public void setPickupStop(PickupStop pickupStop) {
        this.pickupStop = pickupStop;
    }

    public LiveTracking getLiveTracking() {
        return liveTracking;
    }

    public void setLiveTracking(LiveTracking liveTracking) {
        this.liveTracking = liveTracking;
    }

    public Delay getDelay() {
        return delay;
    }

    public void setDelay(Delay delay) {
        this.delay = delay;
    }

    public Fee getFee() {
        return fee;
    }

    public void setFee(Fee fee) {
        this.fee = fee;
    }

    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Student {

        private Long studentId;
        private String studentName;
        private String registrationNumber;

        public Long getStudentId() {
            return studentId;
        }

        public void setStudentId(Long studentId) {
            this.studentId = studentId;
        }

        public String getStudentName() {
            return studentName;
        }

        public void setStudentName(String studentName) {
            this.studentName = studentName;
        }

        public String getRegistrationNumber() {
            return registrationNumber;
        }

        public void setRegistrationNumber(String registrationNumber) {
            this.registrationNumber = registrationNumber;
        }
    }

    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class AssignedBus {

        private Long busId;
        private String busNumber;
        private String registrationNumber;
        private String routeName;
        private String driverName;
        private String driverPhoneMasked;
        private String status;

        public Long getBusId() {
            return busId;
        }

        public void setBusId(Long busId) {
            this.busId = busId;
        }

        public String getBusNumber() {
            return busNumber;
        }

        public void setBusNumber(String busNumber) {
            this.busNumber = busNumber;
        }

        public String getRegistrationNumber() {
            return registrationNumber;
        }

        public void setRegistrationNumber(String registrationNumber) {
            this.registrationNumber = registrationNumber;
        }

        public String getRouteName() {
            return routeName;
        }

        public void setRouteName(String routeName) {
            this.routeName = routeName;
        }

        public String getDriverName() {
            return driverName;
        }

        public void setDriverName(String driverName) {
            this.driverName = driverName;
        }

        public String getDriverPhoneMasked() {
            return driverPhoneMasked;
        }

        public void setDriverPhoneMasked(String driverPhoneMasked) {
            this.driverPhoneMasked = driverPhoneMasked;
        }

        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }
    }

    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class PickupStop {

        private Long stopId;
        private String stopName;
        private Double latitude;
        private Double longitude;
        private String scheduledTime;

        public Long getStopId() {
            return stopId;
        }

        public void setStopId(Long stopId) {
            this.stopId = stopId;
        }

        public String getStopName() {
            return stopName;
        }

        public void setStopName(String stopName) {
            this.stopName = stopName;
        }

        public Double getLatitude() {
            return latitude;
        }

        public void setLatitude(Double latitude) {
            this.latitude = latitude;
        }

        public Double getLongitude() {
            return longitude;
        }

        public void setLongitude(Double longitude) {
            this.longitude = longitude;
        }

        public String getScheduledTime() {
            return scheduledTime;
        }

        public void setScheduledTime(String scheduledTime) {
            this.scheduledTime = scheduledTime;
        }
    }

    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class LiveTracking {

        private String currentLocationName;
        private Double latitude;
        private Double longitude;
        private Double distanceToStopKm;
        private Integer estimatedArrivalMinutes;
        private String estimatedArrivalTime;
        private String lastUpdatedAt;

        public String getCurrentLocationName() {
            return currentLocationName;
        }

        public void setCurrentLocationName(String currentLocationName) {
            this.currentLocationName = currentLocationName;
        }

        public Double getLatitude() {
            return latitude;
        }

        public void setLatitude(Double latitude) {
            this.latitude = latitude;
        }

        public Double getLongitude() {
            return longitude;
        }

        public void setLongitude(Double longitude) {
            this.longitude = longitude;
        }

        public Double getDistanceToStopKm() {
            return distanceToStopKm;
        }

        public void setDistanceToStopKm(Double distanceToStopKm) {
            this.distanceToStopKm = distanceToStopKm;
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

        public String getLastUpdatedAt() {
            return lastUpdatedAt;
        }

        public void setLastUpdatedAt(String lastUpdatedAt) {
            this.lastUpdatedAt = lastUpdatedAt;
        }
    }

    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Delay {

        private Boolean isDelayed;
        private Integer delayMinutes;
        private String reasonCode;
        private String reasonDescription;

        public Boolean getIsDelayed() {
            return isDelayed;
        }

        public void setIsDelayed(Boolean delayed) {
            isDelayed = delayed;
        }

        public Integer getDelayMinutes() {
            return delayMinutes;
        }

        public void setDelayMinutes(Integer delayMinutes) {
            this.delayMinutes = delayMinutes;
        }

        public String getReasonCode() {
            return reasonCode;
        }

        public void setReasonCode(String reasonCode) {
            this.reasonCode = reasonCode;
        }

        public String getReasonDescription() {
            return reasonDescription;
        }

        public void setReasonDescription(String reasonDescription) {
            this.reasonDescription = reasonDescription;
        }
    }

    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Fee {

        private Double totalFee;
        private Double amountPaid;
        private Double amountDue;
        private String dueDate;
        private String status;

        public Double getTotalFee() {
            return totalFee;
        }

        public void setTotalFee(Double totalFee) {
            this.totalFee = totalFee;
        }

        public Double getAmountPaid() {
            return amountPaid;
        }

        public void setAmountPaid(Double amountPaid) {
            this.amountPaid = amountPaid;
        }

        public Double getAmountDue() {
            return amountDue;
        }

        public void setAmountDue(Double amountDue) {
            this.amountDue = amountDue;
        }

        public String getDueDate() {
            return dueDate;
        }

        public void setDueDate(String dueDate) {
            this.dueDate = dueDate;
        }

        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }
    }
}
