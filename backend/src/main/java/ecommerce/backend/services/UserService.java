package ecommerce.backend.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import ecommerce.backend.entities.User;

public interface UserService {
	
	public User addUser(User user);

	public ResponseEntity<HttpStatus> isValidUser(User user);

}
