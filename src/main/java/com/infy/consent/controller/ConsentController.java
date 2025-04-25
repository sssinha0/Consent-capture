package com.infy.consent.controller;

import com.infy.consent.model.Consent;
import com.infy.consent.repository.ConsentRepository;
import com.infy.consent.service.SessionService;
import com.infy.consent.websocket.SessionEventPublisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping("/api/consent")
public class ConsentController {

    @Autowired
    private ConsentRepository consentRepo;
    @Autowired private SessionService sessionService;
    @Autowired private SessionEventPublisher publisher;

    @PostMapping
    public ResponseEntity<?> submitConsent(@RequestBody Consent consent) {
        if (!sessionService.canAcceptConsent(consent.getSessionId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Consent already submitted or session inactive.");
        }

        consent.setSubmittedAt(Instant.now());
        Consent saved = consentRepo.save(consent);
        publisher.broadcastConsentReceived(consent.getSessionId());
        return ResponseEntity.ok(saved);
    }
}
