package dynamik_challenge.gabriel.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
@Entity
@Table(name = "developers")
public class Developer {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;

	@Column(name = "nickname", nullable = false, unique = true, length = 32)
	private String nickname;

	@Column(name = "name", nullable = false, length = 100)
	private String name;

	@Column(name = "birth_date", nullable = false)
	@JsonProperty("birth_date")
	private LocalDate birthDate;

	@ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	@JoinTable(
			name = "developer_stacks",
			joinColumns = @JoinColumn(name = "developer_id"),
			inverseJoinColumns = @JoinColumn(name = "stack_id")
	)
	private Set<Stack> stack = new HashSet<>();

	public Developer() {
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}

	public Set<Stack> getStack() {
		return stack;
	}

	public void setStack(Set<Stack> stack) {
		this.stack = stack;
	}
}
