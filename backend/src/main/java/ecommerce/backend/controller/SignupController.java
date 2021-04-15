package ecommerce.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.backend.entities.User;
import ecommerce.backend.services.UserService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class SignupController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
	public ResponseEntity<HttpStatus> addUser(@RequestBody User user)
	{
		user.setIsAdmin(false);
		try 
		{
			this.userService.addUser(user);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@PostMapping("/login")
	public ResponseEntity<HttpStatus> isValidUser(@RequestBody User user)
	{
		try 
		{
			return userService.isValidUser(user);
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
			System.out.println("Manish");
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
