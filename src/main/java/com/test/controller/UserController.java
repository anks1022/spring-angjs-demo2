package com.test.controller;

import java.util.List;

import com.test.dto.AddUserResponse;
import com.test.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.test.dto.UserDto;
import com.test.utils.Constants;

/**
 * User crud operations
 */
@RequestMapping("/user")
@RestController
public class UserController {
	@Autowired
	UserService userService;

	@RequestMapping(Constants.GET_ALL_USERS)
	public List<UserDto> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@RequestMapping(value= Constants.SAVE_USER, method= RequestMethod.POST)
	public AddUserResponse saveUser(@RequestBody UserDto userDto) {
		if(isAnyInputEmpty(userDto)) {
			return new AddUserResponse("001");
		}
		userService.saveUser(userDto);
		return new AddUserResponse("000");
	}

	private boolean isAnyInputEmpty(UserDto userDto) {
		return StringUtils.isEmpty(userDto.getFirstName()) || StringUtils.isEmpty(userDto.getLastName())
				|| StringUtils.isEmpty(userDto.getEmail()) || StringUtils.isEmpty(userDto.getDate());
	}
}
