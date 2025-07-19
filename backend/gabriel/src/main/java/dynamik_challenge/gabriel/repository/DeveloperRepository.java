package dynamik_challenge.gabriel.repository;

import dynamik_challenge.gabriel.entity.Developer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.UUID;

public interface DeveloperRepository extends JpaRepository<Developer, UUID> {
	boolean existsByNickname(String nickname);
	@Query("""
    SELECT DISTINCT d FROM Developer d
    LEFT JOIN FETCH d.stack s
    WHERE LOWER(d.nickname) LIKE LOWER(CONCAT('%', :term, '%'))
       OR LOWER(d.name) LIKE LOWER(CONCAT('%', :term, '%'))
       OR LOWER(s.name) LIKE LOWER(CONCAT('%', :term, '%'))
""")
	Page<Developer> searchByTerm(@Param("term") String term, Pageable pageable);

}