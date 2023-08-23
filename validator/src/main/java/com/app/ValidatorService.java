package main.java.com.app;
import org.springframework.stereotype.Service;

@Service
public class ValidatorService {
    public boolean validateToken(String validateInputValue) {
        int counter = 0;
        for (int i = 0; i < validateInputValue.length(); i++) {
            int currentValue = validateInputValue.charAt(i) - '0';
            if (i % 2 == 0) {
                int doubledValue = currentValue * 2;
                if (doubledValue > 9) {
                    counter += (doubledValue / 10 + doubledValue % 10);
                } else {
                    counter += doubledValue;
                }
            } else {
                counter += currentValue;
            }
        }
        return counter % 10 == 0;
    }
}
