package com.infy.consent.controller;

import com.infy.consent.model.Session;
import com.infy.consent.service.SessionService;
import com.infy.consent.websocket.SessionEventPublisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;

@RestController
@RequestMapping("/api/session")
public class SessionController {

    @Autowired
    private SessionService sessionService;
    @Autowired private SessionEventPublisher publisher;

    @PostMapping("/start")
    public Session startSession(@RequestParam int timeoutSeconds) {
        Session session = sessionService.createSession(Duration.ofSeconds(timeoutSeconds));
        publisher.broadcastSessionStarted(session);
        return session;
    }

    @PostMapping("/close/{id}")
    public void closeSession(@PathVariable String id) {
        sessionService.closeSession(id);
        publisher.broadcastSessionClosed(id);
    }
}

