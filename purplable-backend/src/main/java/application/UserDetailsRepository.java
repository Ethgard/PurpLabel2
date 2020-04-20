package application;

import org.springframework.data.repository.CrudRepository;

import application.db.dals.UserDetails;

public interface UserDetailsRepository extends CrudRepository<UserDetails, Integer> {
    UserDetails findByToken(String token);
}
