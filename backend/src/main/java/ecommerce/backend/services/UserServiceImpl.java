package ecommerce.backend.services;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ecommerce.backend.dao.UserDao;
import ecommerce.backend.entities.User;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserDao userDao;

	@Override
	public User addUser(User user) {
		userDao.save(user);
		return user;
	}
	public ResponseEntity<HttpStatus> isValidUser(User user) {
		System.out.println(user.getEmail());
		System.out.println(user.getPassword());
		List<User>list = userDao.findAll();
		Iterator<User>it = list.iterator();
		while(it.hasNext()) {
			User u = it.next();
			System.out.println(u.getEmail()+"   "+u.getPassword());
			if(u.getEmail().equalsIgnoreCase(user.getEmail()) && u.getPassword().equalsIgnoreCase(user.getPassword())) {
				return new ResponseEntity<>(HttpStatus.OK);
			}
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
