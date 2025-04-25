package com.infy.consent.websocket;

import com.infy.consent.model.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class SessionEventPublisher {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public void broadcastSessionStarted(Session session) {
        messagingTemplate.convertAndSend("/topic/session", Map.of("type", "SESSION_STARTED", "sessionId", session.getId()));
    }

    public void broadcastSessionClosed(String sessionId) {
        messagingTemplate.convertAndSend("/topic/session", Map.of("type", "SESSION_CLOSED", "sessionId", sessionId));
    }

    public void broadcastConsentReceived(String sessionId) {
        messagingTemplate.convertAndSend("/topic/session", Map.of("type", "CONSENT_RECEIVED", "sessionId", sessionId));
    }
}

