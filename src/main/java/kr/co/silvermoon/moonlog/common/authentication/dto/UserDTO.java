package kr.co.silvermoon.moonlog.common.authentication.dto;

import lombok.Data;

@Data
public class UserDTO {
    private String userId;
    private String userPwd;
    private boolean admin;
}
