package dynamik_challenge.gabriel.service;

import dynamik_challenge.gabriel.dto.reponse.DeveloperResponse;
import dynamik_challenge.gabriel.dto.reponse.PaginatedDeveloperResponse;
import dynamik_challenge.gabriel.dto.request.DeveloperRequest;
import dynamik_challenge.gabriel.entity.Developer;
import dynamik_challenge.gabriel.entity.Stack;
import dynamik_challenge.gabriel.exception.NicknameAlreadyExists;
import dynamik_challenge.gabriel.exception.ResourceNotFoundException;
import dynamik_challenge.gabriel.repository.DeveloperRepository;
import dynamik_challenge.gabriel.repository.StackRepository;
import dynamik_challenge.gabriel.service.mapper.DeveloperMapper;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class DeveloperService {
	private final DeveloperRepository developerRepository;
	private final StackRepository stackRepository;
	private static final int DEFAULT_PAGE_SIZE = 20;

	public DeveloperService(DeveloperRepository developerRepository, StackRepository stackRepository) {
		this.developerRepository = developerRepository;
		this.stackRepository = stackRepository;
	}

	public PaginatedDeveloperResponse getDevelopers() {
		PageRequest pageRequest = PageRequest.of(0, DEFAULT_PAGE_SIZE);
		Page<Developer> developerPage = developerRepository.findAll(pageRequest);

		List<DeveloperResponse> content = developerPage
				.map(DeveloperMapper::toDTO)
				.getContent();

		long total = developerPage.getTotalElements();

		return new PaginatedDeveloperResponse(content, total);
	}

	public DeveloperResponse getDeveloperById(UUID id) {
		Developer developer = developerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Developer not found"));

		return DeveloperMapper.toDTO(developer);
	}

	public List<DeveloperResponse> getDevelopersByTerm(String term) {
		PageRequest page = PageRequest.of(0, DEFAULT_PAGE_SIZE);
		Page<Developer> filtered = developerRepository.searchByTerm(term, page);
		return filtered.getContent()
				.stream()
				.map(DeveloperMapper::toDTO)
				.toList();
	}

	@Transactional
	public Developer createDeveloper(DeveloperRequest developerRequest) {
		if (developerRepository.existsByNickname(developerRequest.getNickname())) {
			throw new NicknameAlreadyExists("Nickname already exists.");
		}

		Set<Stack> resolvedStacks = resolveOrCreateStacks(developerRequest.getStack());

		Developer developer = DeveloperMapper.toEntity(developerRequest,resolvedStacks);

		return developerRepository.save(developer);
	}

	private Set<Stack> resolveOrCreateStacks(List<String> stackNames) {
		if (stackNames == null) return Collections.emptySet();

		return stackNames.stream()
				.map(name -> stackRepository.findByNameIgnoreCase(name.trim())
						.orElseGet(() -> stackRepository.save(new Stack(name.trim()))))
				.collect(Collectors.toSet());
	}
}
