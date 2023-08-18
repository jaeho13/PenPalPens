package com.penpalpens.penpalpens.repository;

import com.penpalpens.penpalpens.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserInfo, String> {

    @Query("select u from UserInfo u where u.uEmail like :uEmail")
    UserInfo findByuEmail(@Param(value = "uEmail") String uEmail);

    @Query("select u from UserInfo u where u.uRandom like :uRandom")
    Boolean findByuRandom(@Param(value = "uRandom") int num);

    @Query("select u from UserInfo u where u.uRandom like :uRandom")
    UserInfo checkUserCode(@Param(value = "uRandom") int num);

    @Query("select uEmail from UserInfo where uRandom = :uRandom AND uEmail != :uEmail")
    String findLinkUser(@Param(value = "uRandom") int uRandom, @Param(value = "uEmail") String uEmail);
}
