package com.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/** View renderer
 */
@Controller
public class HomeController {
	@RequestMapping("/home")
	public String home() {
		return "/views/home.html";
	}
	@RequestMapping("/")
	public String base() {
		return "/views/home.html";
	}
/*	@RequestMapping("/add")
	public String add() {
		return "/views/addUser.html";
	}*/
}
