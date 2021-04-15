package ecommerce.backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import ecommerce.backend.entities.Admin;
import ecommerce.backend.services.AdminJpaDaoService;
import ecommerce.backend.uploadFile.FileUpload;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminController {
	
	
	@Autowired
	private AdminJpaDaoService service;
	
	@Autowired
	private FileUpload fileupload;
	private static HashMap<Long,Admin>list = new HashMap<>();
	
	@GetMapping("/product")
	public List<Admin> getAll(){
		return service.getAllProduct();
	}
	
	@GetMapping("/product/{id}")
	public Admin getById(@PathVariable Long id) {
		return service.getOneProduct(id);
	}
	
	@PostMapping("/product")
	public ResponseEntity<HttpStatus> addProduct(@RequestParam("file") MultipartFile file,@RequestParam("admin")String admin) throws JsonMappingException, JsonProcessingException {
		System.out.println(admin);
		ObjectMapper obj = new ObjectMapper();
		Admin a = obj.readValue(admin, Admin.class);			
		String url = fileupload.uploadFile(file).toString().split(",")[1];		
		System.out.println(url);
		a.setImagePath(url);
		service.addProduct(a);
		System.out.println(file.getOriginalFilename());
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@PutMapping("/product")
	public void updateProduct(@RequestBody Admin admin) {
		service.updateProduct(admin);
	}
	
	@DeleteMapping("/product/{id}")
	public Admin deleteProduct(@PathVariable Long id)
	{
		return service.deleteById(id);
	}
	@PostMapping("cart/{id}")
	public  ResponseEntity<HttpStatus> addToCart(@PathVariable Long id,@RequestBody Admin admin)
	{
		list.put(id,admin);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	@DeleteMapping("cart/{id}")
	public  ResponseEntity<HttpStatus> deleteFromCart(@PathVariable Long id)
	{
		list.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	@DeleteMapping("/cart")
	public  ResponseEntity<HttpStatus> deleteCart()
	{
		for(Map.Entry<Long, Admin>e:list.entrySet()) {
			Admin prevAdmin = getById(e.getKey());
			int totalQty = prevAdmin.getQuantity();
			int currQty = e.getValue().getQuantity();
			prevAdmin.setQuantity(totalQty-currQty);
			service.addProduct(prevAdmin);
		}		
		list.clear();
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	@GetMapping("/cart")
	public  List<Admin> getCart()
	{
		List<Admin>cartProducts = new ArrayList<Admin>();
		for(Map.Entry<Long, Admin>e:list.entrySet()) {
			cartProducts.add(e.getValue());
		}
		return cartProducts;
		
	}	
	
}
