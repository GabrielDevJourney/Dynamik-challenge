package dynamik_challenge.gabriel.controller;

import dynamik_challenge.gabriel.dto.reponse.DeveloperResponse;
import dynamik_challenge.gabriel.dto.reponse.PaginatedDeveloperResponse;
import dynamik_challenge.gabriel.dto.request.DeveloperRequest;
import dynamik_challenge.gabriel.entity.Developer;
import dynamik_challenge.gabriel.service.DeveloperService;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/devs")

public class DeveloperController {
	private final DeveloperService developerService;

	public DeveloperController(DeveloperService developerService) {
		this.developerService = developerService;
	}

	@GetMapping
	public ResponseEntity<List<DeveloperResponse>> getDevelopers() {
		PaginatedDeveloperResponse paginatedResponse = developerService.getDevelopers();

		HttpHeaders headers = new HttpHeaders();
		headers.add("X-Total-Count", String.valueOf(paginatedResponse.getTotalElements()));

		return ResponseEntity
				.ok()
				.headers(headers)
				.body(paginatedResponse.getContent());
	}

	@GetMapping("/{id}")
	public ResponseEntity<DeveloperResponse> getDeveloperById(@PathVariable UUID id) {
		DeveloperResponse developer = developerService.getDeveloperById(id);
		return ResponseEntity.ok(developer);
	}

	@GetMapping(params = "terms")
	public ResponseEntity<List<DeveloperResponse>> getDevelopersByTerm(@RequestParam String terms) {
		if (terms == null || terms.trim().isEmpty()) {
			return ResponseEntity.badRequest().build();
		}

		List<DeveloperResponse> developers = developerService.getDevelopersByTerm(terms.trim());
		return ResponseEntity.ok(developers);
	}

	@PostMapping
	public ResponseEntity<Void> createDeveloper(@Valid @RequestBody DeveloperRequest request) {
		Developer developer = developerService.createDeveloper(request);

		URI location = URI.create("/devs/" + developer.getId());

		return ResponseEntity
				.status(HttpStatus.CREATED)
				.location(location)
				.build();
	}
}
