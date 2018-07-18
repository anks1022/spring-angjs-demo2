package com.test.service.impl;

import com.test.dto.UserDto;
import com.test.service.UserService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

/** User crud service imple
 */
@Service
public class UserServiceimpl implements UserService {


	static List<UserDto> users = new ArrayList<>();

	@Override
	public void saveUser(UserDto userDto) {
		users.add(userDto);
	}

	@Override
	public List<UserDto> getAllUsers() {
		return users;
	}
}
