package ecommerce.backend.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	Long id;
	String name;
	String type;
	String description;
	Integer price;
	String gender;
	Integer quantity;
	String size;
	String color;
	String imagePath;
	public Admin() {
		
	}
	
	public Admin(Long id, String name, String type, String description, Integer price, String gender, Integer quantity,
			String size, String color, String imagePath) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.description = description;
		this.price = price;
		this.gender = gender;
		this.quantity = quantity;
		this.size = size;
		this.color = color;
		this.imagePath = imagePath;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	
	
}
