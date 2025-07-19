package dynamik_challenge.gabriel.exception;

import dynamik_challenge.gabriel.exception.exceptionHandler.CustomValidationException;

public class ResourceNotFoundException extends CustomValidationException {
	public ResourceNotFoundException(String message) {
		super(message);
	}
}