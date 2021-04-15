package ecommerce.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import ecommerce.backend.entities.Admin;

public interface AdminJpaRepository extends JpaRepository<Admin, Long>{

}
