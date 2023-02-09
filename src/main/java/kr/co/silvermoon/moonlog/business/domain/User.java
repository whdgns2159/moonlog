package kr.co.silvermoon.moonlog.business.domain;

import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "USER")
@Getter
public class User {

    @Id
    private int idx;

    private String name;

    private String userId;

    private String password;

    private String isUse;

    @OneToMany
    @JoinColumn(name = "user_idx")
    private List<Authority> authorities;
}
