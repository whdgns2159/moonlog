package kr.co.silvermoon.moonlog.common.authentication.controller;

import kr.co.silvermoon.moonlog.common.authentication.dto.TokenDTO;
import kr.co.silvermoon.moonlog.common.authentication.dto.UserDTO;
import kr.co.silvermoon.moonlog.common.authentication.service.CustomUserDetailsService;
import kr.co.silvermoon.moonlog.common.jwt.JwtFilter;
import kr.co.silvermoon.moonlog.common.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    private CustomUserDetailsService customUserDetailsService;

    /**
     * 로그인 요청 및 토큰생성
     * */
    @PostMapping("/login")
    public ResponseEntity<TokenDTO> authorize(@Valid @RequestBody UserDTO userDTO) {
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(userDTO.getUserId(), userDTO.getUserPwd());

        //authenticationManagerBuilder가 호출되면서 CustomUserDetailService가 로드됨.
        // user db 에서 권한 조회
        // AuthenticationManager의 구현체인 ProviderManager의 authenticate 메소드 실행
        // => 해당 메소드 내에서  AuthenticationProvider의 authenticate 메소드를 실행한다.
        // => 해당 인터페이스의 구현체중 데이터베이스에 있는 사용자의 정보를 가져오는
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        //token 생성
        String jwt = tokenProvider.createToken(authentication);

        HttpHeaders httpHeaders = new HttpHeaders();
        //jwt 토큰을dmf
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        return new ResponseEntity<>(new TokenDTO(jwt), httpHeaders, HttpStatus.OK);
    }

    /**
     * 회원가입요청
     * */
    @PostMapping("/signin")
    public ResponseEntity<String> userSignin(@Valid @RequestBody UserDTO userDTO){
        customUserDetailsService.setUser(userDTO);
        return new ResponseEntity<>("등록되었습니다.", HttpStatus.OK);
    }
}
