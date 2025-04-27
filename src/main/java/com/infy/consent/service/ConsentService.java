package com.infy.consent.service;

import com.infy.consent.model.Consent;
import com.infy.consent.repository.ConsentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class ConsentService {
    @Autowired
    private ConsentRepository consentRepo;
    @Autowired
    private SessionService sessionService;

    public ResponseEntity<?> submitConsent(Consent consent) {
        if (!sessionService.canAcceptConsent(consent.getSessionId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Consent already submitted or session inactive.");
        }
        consent.setSubmittedAt(Instant.now());
        Consent saved = consentRepo.save(consent);
        return ResponseEntity.ok(saved);
    }
}
