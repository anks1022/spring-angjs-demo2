package com.test;

import com.test.controller.HomeController;
import com.test.controller.UserController;
import com.test.dto.UserDto;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AppTest {

	@Autowired
	private HomeController controller;

	@Autowired
	private UserController userController;

	@Test
	public void contexLoads() throws Exception {
		assertThat(controller).isNotNull();
	}

	@Test
	public void saveUserFailure() throws Exception {
		UserDto ud = new UserDto("fn", "ln", "em", null, null);
		String isSuccess = userController.saveUser(ud);
		assert(isSuccess).equals("001");
	}

	@Test
	public void saveUserSuccess() throws Exception {
		UserDto ud = new UserDto("fn", "ln", "em", "12-12-2017", null);
		String isSuccess = userController.saveUser(ud);
		assert(isSuccess).equals("000");
	}

	@Test
	public void userSaveAndGetTest() throws Exception {
		UserDto ud1 = new UserDto("fn", "ln", "em", "12-12-2017", null);
		UserDto ud2 = new UserDto("fn2", "ln2", "em2", "12-12-2017", "url");

		userController.saveUser(ud1);
		userController.saveUser(ud2);

		List<UserDto> ul = userController.getAllUsers();
		assert(ul.size()+"").equals("2");
	}
}
