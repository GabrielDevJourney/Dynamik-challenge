package dynamik_challenge.gabriel.exception;

import dynamik_challenge.gabriel.exception.exceptionHandler.CustomValidationException;

public class NicknameAlreadyExists extends CustomValidationException {
	public NicknameAlreadyExists(String message) {
		super(message);
	}
}
