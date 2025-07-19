package dynamik_challenge.gabriel.dto.reponse;

import java.util.List;

public class PaginatedDeveloperResponse {
	private List<DeveloperResponse> developers;
	private long totalElements;

	public PaginatedDeveloperResponse(List<DeveloperResponse> developers, long totalElements) {
		this.developers = developers;
		this.totalElements = totalElements;
	}

	public List<DeveloperResponse> getContent() {
		return developers;
	}

	public long getTotalElements() {
		return totalElements;
	}
}
