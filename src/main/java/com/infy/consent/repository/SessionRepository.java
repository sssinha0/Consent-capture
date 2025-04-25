package com.infy.consent.repository;

import com.infy.consent.model.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<Session,String> {
}
