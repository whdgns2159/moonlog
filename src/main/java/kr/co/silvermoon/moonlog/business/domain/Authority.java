package kr.co.silvermoon.moonlog.business.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "AUTHORITY")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Authority {

    @Id
    private int idx;

    private String authority;

    @ManyToOne
    @JoinColumn(name = "user_idx", nullable = false)
    private User user;

    public Authority(String authority){
        this.authority = authority;
    }
}
