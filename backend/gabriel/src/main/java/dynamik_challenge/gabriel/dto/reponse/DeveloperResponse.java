package dynamik_challenge.gabriel.dto.reponse;

import java.time.LocalDate;
import java.util.List;

public class DeveloperResponse {
	private final String id;
	private final String nickname;
	private final String name;
	private final LocalDate birth_date;
	private final List<String> stack;

	public DeveloperResponse(String id, String nickname, String name, LocalDate birth_date, List<String> stack) {
		this.id = id;
		this.nickname = nickname;
		this.name = name;
		this.birth_date = birth_date;
		this.stack = stack;
	}

	public String getId() {
		return id;
	}

	public String getNickname() {
		return nickname;
	}

	public String getName() {
		return name;
	}

	public LocalDate getBirth_date() {
		return birth_date;
	}

	public List<String> getStack() {
		return stack;
	}
}
