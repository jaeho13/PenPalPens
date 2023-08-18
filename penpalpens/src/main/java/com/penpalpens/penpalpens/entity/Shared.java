package com.penpalpens.penpalpens.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@DynamicInsert
@Table(name = "Shared")
public class Shared {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "share_seq")
    @SequenceGenerator(name = "share_seq", sequenceName = "share_seq", allocationSize = 1)
    private int sIdx;

    @Column(nullable = false, length = 3000)
    private String aContent;

    @Column(nullable = false, length = 3000)
    private String sContent;

    @Column(length = 300)
    private String uQuestion;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name="qIdx")
//    private Question questionVO;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "uEmail")
    private UserInfo userInfoVO;

    @Column
    private int weRandom;

    @CreatedDate
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime sDate;
}
