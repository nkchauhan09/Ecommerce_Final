package ecommerce.backend.services;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.Assert;

import ecommerce.backend.dao.AdminJpaRepository;
import ecommerce.backend.dao.UserDao;
import ecommerce.backend.entities.Admin;
import ecommerce.backend.entities.User;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestEcommerce {
	
	@Autowired
	private UserService userService;
	
	@MockBean
	private UserDao userDao;
	
	@Autowired
	private AdminJpaDaoService adminService;
	
	@MockBean
	private AdminJpaRepository adminDao;
	
	@Test
	public void TestAddUser() 
	{
		
		User user = new User();
		user.setId(1);
		user.setName("Neeraj");
		user.setMobile("9911680879");
		user.setEmail("kneeraj460@gmail.com");
		user.setIsAdmin(false);
		user.setPassword("neeraj123");
		
		Mockito.when(userDao.save(user)).thenReturn(user);
		assertEquals(user, userService.addUser(user));
		
	}
	
	@Test
	public void TestgetAdmin()
	{
		Admin admin = new Admin();
		admin.setId(1l);
		admin.setName("suit");
		admin.setType("cotton clothes");
		admin.setDescription("womens suit");
		admin.setPrice(700);
		admin.setGender("female");
		admin.setQuantity(10);
		admin.setSize("s");
		admin.setColor("blue");
		admin.setImagePath("C:\\Users\\Neeraj Chauhan\\Desktop\\images\\suit.jpg");
		
		List<Admin> adminList = new ArrayList<>();
		adminList.add(admin);
		
		Mockito.when(adminDao.findAll()).thenReturn(adminList);
		assertEquals(adminList, adminService.getAllProduct());
	}
	
	@Test
	public void TestaddAdmin()
	{
		Admin admin1 = new Admin();
		admin1.setId(1l);
		admin1.setName("shorts");
		admin1.setType("cotton clothes");
		admin1.setDescription("mens shorts");
		admin1.setPrice(700);
		admin1.setGender("male");
		admin1.setQuantity(10);
		admin1.setSize("m");
		admin1.setColor("black");
		admin1.setImagePath("C:\\Users\\Neeraj Chauhan\\Desktop\\images\\short.jpg");
		
		Mockito.when(adminDao.save(admin1)).thenReturn(admin1);
		assertEquals(admin1, adminService.addProduct(admin1));
	}
	
	@Test
	public void testUpdateAdmin()
	{
		Admin admin2 = new Admin();
		admin2.setId(1l);
		admin2.setName("shirt");
		admin2.setType("cotton shirt");
		admin2.setDescription("mens shirt");
		admin2.setPrice(800);
		admin2.setGender("male");
		admin2.setQuantity(12);
		admin2.setSize("l");
		admin2.setColor("black");
		admin2.setImagePath("C:\\Users\\Neeraj Chauhan\\Desktop\\images\\shirt.jpg");
			
		Mockito.when(adminDao.findById(1l)).thenReturn(admin2);
		admin2.setName("Tshirt");
		Mockito.when(adminDao.save(admin2)).thenReturn(admin2);
		assertEquals(admin2, adminService.updateProduct(1l, "shirt", "cotton shirt", "mens shirt", 800, "male", 12, "l", "black", "C:\\Users\\Neeraj Chauhan\\Desktop\\images\\shirt.jpg"));
	}

	
	 @Test
	    public void TestdeleteUser(){
	        Admin admin = new Admin(1l, "shirt", "cotton shirt", "mens shirt", 800, "male", 12, "l", "black", "C:\\Users\\Neeraj Chauhan\\Desktop\\images\\shirt.jpg");
	        adminDao.save(admin);
	        adminDao.delete(admin);
	        assertTrue(adminDao.findAll().isEmpty());
	    }
	 
	  @Test
	    public void TestGetOneAdmin(){
		  Admin admin = new Admin(1l, "shirt", "cotton shirt", "mens shirt", 800, "male", 12, "l", "black", "C:\\Users\\Neeraj Chauhan\\Desktop\\images\\shirt.jpg");
	        adminDao.save(admin);

	        adminDao.findById(new Long(1l))
	                .map(newAdmin ->{
	                   assertEquals("shirt",newAdmin.getName());
	                   return true;
	                });

	    }
	

}
