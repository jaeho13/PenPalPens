package com.penpalpens.penpalpens.repository;

import com.penpalpens.penpalpens.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepository extends JpaRepository<UserInfo, String> {
    @Query("select u from UserInfo u where u.uEmail like :uEmail")
    UserInfo findByuEmail(@Param(value = "uEmail") String uEmail);

    @Query("select u from UserInfo u where u.uRandom like :uRandom")
    Boolean findByuRandom(@Param(value = "uRandom") int num);
}
