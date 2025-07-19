package dynamik_challenge.gabriel.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;
import java.util.List;

public class DeveloperRequest {
	@NotBlank
	@Size(max = 32)
	private String nickname;

	@NotBlank
	@Size(max = 100)
	private String name;

	@NotNull
	private LocalDate birth_date;

	private List<@Size(max = 32) String> stack;

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

	public LocalDate getBirth_date() {
		return birth_date;
	}

	public void setBirth_date(LocalDate birth_date) {
		this.birth_date = birth_date;
	}

	public List<String> getStack() {
		return stack;
	}

	public void setStack(List<String> stack) {
		this.stack = stack;
	}
}
