package dynamik_challenge.gabriel.repository;

import dynamik_challenge.gabriel.entity.Stack;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StackRepository extends JpaRepository<Stack,Long> {
	Optional<Stack> findByName(String name);
	Optional<Stack> findByNameIgnoreCase(String name);
}
