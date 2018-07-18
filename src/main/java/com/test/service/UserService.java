package com.test.service;

import java.util.List;

import com.test.dto.UserDto;

/** User crud  trait
 */
public interface UserService {

    void saveUser(UserDto userDto);
    List<UserDto> getAllUsers();
}
