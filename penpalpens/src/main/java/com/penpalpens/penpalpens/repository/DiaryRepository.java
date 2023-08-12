package com.penpalpens.penpalpens.repository;

import com.penpalpens.penpalpens.entity.Diary;
import com.penpalpens.penpalpens.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface DiaryRepository extends JpaRepository<Diary, Integer> {

    @Query("SELECT d FROM Diary d JOIN d.userInfoVO u WHERE u.uEmail = :uEmail")
    List<Diary> findMyDiary(@Param("uEmail") String uEmail);

    }
