package kr.co.silvermoon.moonlog.business.repository;

import kr.co.silvermoon.moonlog.business.domain.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer>{

    @EntityGraph(attributePaths = "authorities")
    Optional<User> findByWithAuthoritiesByUserId(String loginId);



}