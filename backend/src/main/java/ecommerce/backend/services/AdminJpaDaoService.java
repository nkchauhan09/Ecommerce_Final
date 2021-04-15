package ecommerce.backend.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.backend.dao.AdminJpaRepository;
import ecommerce.backend.entities.Admin;
@Service
public class AdminJpaDaoService {
//	
//	static ArrayList<Admin> list = new ArrayList<>();
//	static {
//		list.add(new Admin(1l,"oppo","a3s","new one",12000,"F",1,"6.5inch","red"));
//	}
	@Autowired
	private AdminJpaRepository services;

	public List<Admin> getAllProduct() {
		return services.findAll();
	}

	public Admin getOneProduct(Long id) {
		return services.findById(id).get();
	}

	public void addProduct(Admin admin) {
		services.save(admin);
	}

	public void updateProduct(Admin admin) {
		services.save(admin);
		
	}

	public Admin deleteById(Long id) {
		Admin data = services.findById(id).get();
		services.delete(data);
		return data;
	}

}
