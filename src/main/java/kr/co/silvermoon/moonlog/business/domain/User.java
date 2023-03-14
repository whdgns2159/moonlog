package kr.co.silvermoon.moonlog.business.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "BLOG_USER")
@Getter
@Setter
public class User {

    @Id
    private int idx;

    private String name;

    private String userId;

    private String password;

    private String isUse;

    @OneToMany(mappedBy = "user")
    private List<Authority> authorities;
}
