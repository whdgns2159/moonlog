package kr.co.silvermoon.moonlog.business.repository;

import kr.co.silvermoon.moonlog.business.domain.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

    @EntityGraph(attributePaths = "authorities")
    Optional<User> findByUserId(String loginId);



}