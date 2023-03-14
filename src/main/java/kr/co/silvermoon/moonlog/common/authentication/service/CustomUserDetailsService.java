package kr.co.silvermoon.moonlog.common.authentication.service;

import kr.co.silvermoon.moonlog.business.domain.Authority;
import kr.co.silvermoon.moonlog.business.repository.UserRepository;
import kr.co.silvermoon.moonlog.common.authentication.dto.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String loginId) throws UsernameNotFoundException {
        return userRepository.findByUserId(loginId)
                .map(user -> createUser(loginId, user))
                .orElseThrow(() -> new UsernameNotFoundException(loginId + " -> 존재 하지 않음."));
    }

    /**Security User 정보를 생성한다. */
    private User createUser(String loginId, kr.co.silvermoon.moonlog.business.domain.User user) {
        System.out.println(user.getIsUse());
        if(!"Y".equals(user.getIsUse())){
            throw new BadCredentialsException(loginId + " -> 활성화 되어있지 않습니다.");
        }
        List<GrantedAuthority> grantedAuthorities = user.getAuthorities().stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getAuthority()))
                .collect(Collectors.toList());
        return new org.springframework.security.core.userdetails.User(
                user.getUserId(),
                user.getPassword(),
                grantedAuthorities);
    }

    /**
     * 회원등록
     * */
    public void setUser(UserDTO userDTO){
        final Optional<kr.co.silvermoon.moonlog.business.domain.User> byUserId =
                userRepository.findByUserId(userDTO.getUserId());
        if(byUserId.isPresent()){
            throw new RuntimeException("이미 존재하는 회원입니다.");
        }
        kr.co.silvermoon.moonlog.business.domain.User user = new kr.co.silvermoon.moonlog.business.domain.User();
        user.setUserId(userDTO.getUserId());
        user.setPassword(passwordEncoder.encode(userDTO.getUserPwd()));

        List<Authority> auths = new ArrayList<>();
        auths.add(new Authority("USER"));
        if(userDTO.isAdmin()){
            auths.add(new Authority("ADMIN"));
        }
        user.setAuthorities(auths);
        user.setIsUse("Y");
        userRepository.save(user);
    }
}
