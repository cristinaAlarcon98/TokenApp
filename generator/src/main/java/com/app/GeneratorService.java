package main.java.com.app;
import org.springframework.stereotype.Service;
import java.util.Random;

@Service
public class GeneratorService {
    private static final int TOTAL_DIGITS = 16;
    private static final int DIGITS_BEFORE_DASH = 4;

    public String generateToken(String availableNumbers) {

        Random random = new Random();
        StringBuilder randomToken = new StringBuilder();

        for (int i = 0; i < TOTAL_DIGITS; i++) {
            if (i > 0 && i % DIGITS_BEFORE_DASH == 0) {
                randomToken.append('-');
            }
            int randomPosition = random.nextInt(availableNumbers.length());
            char randomChar = availableNumbers.charAt(randomPosition);
            randomToken.append(randomChar);
        }
        return randomToken.toString();
    }
}

