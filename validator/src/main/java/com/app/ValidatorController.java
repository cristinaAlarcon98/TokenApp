package main.java.com.app;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ValidatorController {
    private final ValidatorService validatorService;

    @Autowired
    public ValidatorController(ValidatorService validatorService) {
        this.validatorService = validatorService;
    }
    @GetMapping("/validate")
    @ResponseBody
    public boolean getTokenValidation(@RequestParam String validateInputValue) {
        return validatorService.validateToken(validateInputValue);
    }

}