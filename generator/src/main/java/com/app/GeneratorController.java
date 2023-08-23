package main.java.com.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class GeneratorController {
    private final GeneratorService generatorService;

    @Autowired
    public GeneratorController(GeneratorService generatorService) {
        this.generatorService = generatorService;
    }

    @GetMapping("/generate")
    @ResponseBody
    public String getTokenGeneration(@RequestParam String generateInputValue) {
        return generatorService.generateToken(generateInputValue);
    }
}