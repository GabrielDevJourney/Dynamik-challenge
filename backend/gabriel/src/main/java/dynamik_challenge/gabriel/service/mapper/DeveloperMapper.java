package dynamik_challenge.gabriel.service.mapper;

import dynamik_challenge.gabriel.dto.reponse.DeveloperResponse;
import dynamik_challenge.gabriel.dto.request.DeveloperRequest;
import dynamik_challenge.gabriel.entity.Developer;
import dynamik_challenge.gabriel.entity.Developer;
import dynamik_challenge.gabriel.entity.Stack;


import java.util.List;
import java.util.Set;

public class DeveloperMapper {
	public static DeveloperResponse toDTO(Developer developer) {
		List<String> stackNames = null;
		if (developer.getStack() != null) {
			stackNames = developer.getStack().stream()
					.map(Stack::getName)
					.distinct()
					.toList();
		}

		return new DeveloperResponse(
				developer.getId().toString(),
				developer.getNickname(),
				developer.getName(),
				developer.getBirthDate(),
				stackNames
		);
	}
	public static Developer toEntity(DeveloperRequest req, Set<Stack> stacks) {
		Developer developer = new Developer();
		developer.setNickname(req.getNickname());
		developer.setName(req.getName());
		developer.setBirthDate(req.getBirth_date());
		developer.setStack(stacks);
		return developer;
	}
}
