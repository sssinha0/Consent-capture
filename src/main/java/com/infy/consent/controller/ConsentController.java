package com.infy.consent.controller;

import com.infy.consent.model.Consent;
import com.infy.consent.service.ConsentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class ConsentController {
    @Autowired
    private ConsentService consentService;
    @MessageMapping("/send-consent")
    @SendTo("/topic/consent-saved")
    public Consent saveConsent(Consent consentData) {
        // Save consentData to database
        consentService.submitConsent((consentData));
        System.out.println("Received Consent: " + consentData);
        return consentData;
    }
}
