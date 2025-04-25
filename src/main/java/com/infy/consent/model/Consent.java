package com.infy.consent.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;

import java.time.Instant;

@Entity
@Data
public class Consent {
    @Id
    @GeneratedValue
    private Long id;

    private String sessionId;

    @Lob
    private String signatureData;

    private Instant submittedAt;
}

