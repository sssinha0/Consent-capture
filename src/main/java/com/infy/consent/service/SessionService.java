package com.infy.consent.service;

import com.infy.consent.model.Session;
import com.infy.consent.repository.ConsentRepository;
import com.infy.consent.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
import java.util.UUID;

@Service
public class SessionService {

    @Autowired
    private SessionRepository sessionRepo;
    @Autowired
    private ConsentRepository consentRepo;

    public Session createSession(Duration duration) {
        Session session = new Session();
        session.setId(UUID.randomUUID().toString());
        session.setActive(true);
        session.setCreatedAt(Instant.now());
        session.setExpiresAt(Instant.now().plus(duration));
        return sessionRepo.save(session);
    }

    public void closeSession(String sessionId) {
        Session session = sessionRepo.findById(sessionId).orElseThrow();
        session.setActive(false);
        sessionRepo.save(session);
    }

    public boolean canAcceptConsent(String sessionId) {
        return sessionRepo.findById(sessionId)
                .filter(Session::isActive)
                .isPresent() &&
                !consentRepo.existsBySessionId(sessionId);
    }
}

