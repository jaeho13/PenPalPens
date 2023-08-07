package com.penpalpens.penpalpens.controller;


import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.service.ShareService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
@Log4j2
@CrossOrigin(origins = "*")
public class ShareController {

    @Autowired
    ShareService shareService;

    @GetMapping("/share/makeCode")
    public String shareCode(HttpServletRequest request) throws Exception{
        HttpSession session = request.getSession(false);
        UserInfo userInfo = (UserInfo) session.getAttribute("userInfo");

        shareService.makeCode(userInfo);

        return null;
    }
}
