package ecommerce.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import ecommerce.backend.entities.User;

public interface UserDao extends JpaRepository<User, Integer>{

}
