package dynamik_challenge.gabriel.dto.reponse;

import java.time.LocalDate;
import java.util.List;

public class DeveloperResponse {
	private final String uuid;
	private final String nickname;
	private final String name;
	private final LocalDate birth_date;
	private final List<String> stacks;

	public DeveloperResponse(String uuid, String nickname, String name, LocalDate birth_date, List<String> stacks) {
		this.uuid = uuid;
		this.nickname = nickname;
		this.name = name;
		this.birth_date = birth_date;
		this.stacks = stacks;
	}

	public String getUuid() {
		return uuid;
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

	public List<String> getStacks() {
		return stacks;
	}
}
