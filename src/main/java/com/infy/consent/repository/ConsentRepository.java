package com.infy.consent.repository;

import com.infy.consent.model.Consent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsentRepository extends JpaRepository<Consent,Long> {
    boolean existsBySessionId(String sessionId);
}
