package com.penpalpens.penpalpens.dto;

import com.penpalpens.penpalpens.entity.UserInfo;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class userDto {
    private String uId;
    private String uPw;

    public UserInfo toEntity() {
        return UserInfo.builder()
                .uId(uId)
                .uPw(uPw)
                .build();
    }
}
