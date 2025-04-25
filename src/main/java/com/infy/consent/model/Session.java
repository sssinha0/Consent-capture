package com.infy.consent.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.Instant;

@Entity
@Data
public class Session {
    @Id
    private String id;

    private boolean active;

    private Instant createdAt;

    private Instant expiresAt;
}
