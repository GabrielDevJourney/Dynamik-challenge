package dynamik_challenge.gabriel.exception;

import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

	// 400
	@ExceptionHandler(HttpMessageNotReadableException.class)
	public ResponseEntity<Object> handleInvalidJson(HttpMessageNotReadableException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
				Map.of("error", "Invalid request format or data types.")
		);
	}

	// 422
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Object> handleValidationException(MethodArgumentNotValidException ex) {
		Map<String, String> errors = new HashMap<>();

		ex.getBindingResult().getFieldErrors().forEach(error ->
				errors.put(error.getField(), error.getDefaultMessage())
		);

		return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(errors);
	}

	// 422
	@ExceptionHandler(CustomValidationException.class)
	public ResponseEntity<Object> handleCustomValidation(CustomValidationException ex) {
		return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(
				Map.of("error", ex.getMessage())
		);
	}

	// 500
	@ExceptionHandler(Exception.class)
	public ResponseEntity<Object> handleOtherExceptions(Exception ex) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
				Map.of("error", "Internal server error")
		);
	}
}
