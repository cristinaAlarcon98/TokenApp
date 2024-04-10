Welcome to my Token App. This app features only one page divided into two sections. The first section, located on the left side, generates a 16-digit token based on the digits provided by the user. The second section, situated on the right side, verifies the validity of a token by employing the Luhn algorithm.

<img width="1437" alt="Captura de pantalla 2024-03-30 a las 0 38 54" src="https://github.com/cristinaAlarcon98/TokenApp/assets/113309965/7a81eb2b-fba8-46b3-999b-f9efcbdd9863">


Key Features:

Token Format: Each token follows the format XXXX-XXXX-XXXX-XXXX and is composed exclusively of digits ranging from 0 to 9.
Custom Digit Selection: Users have the flexibility to choose which digits can be used for generating tokens. For instance, if a user selects the digits 2, 4, 7, 9, 0, then the token will be formed using only these digits (e.g., 2249-4472-0279-9420).
Token Generation: The application features a GeneratorService that creates tokens. Users can initiate token generation through the UI, which then sends the selected digits to the GeneratorService. The service generates a token randomly based on the provided digit choices, and the generated token is displayed on the UI.
Token Validation: Users can also validate tokens using the application. This process involves sending the token to the ValidatorService, which employs the Luhn algorithm (as per Luhn Algorithm on Wikipedia) to ascertain its validity. The validation result is then displayed on the UI.
Technical Specifications:

FrontEnd: The user interface is developed using React.
BackEnd Services: The GeneratorService and ValidatorService are implemented as Spring Boot applications.
Communication: The FrontEnd and BackEnd services communicate via a REST API.
Repository and Deployment:

The code for the application will be hosted on a public repository (e.g., GitHub).
The repository structure is as follows:
/frontend/... (contains all frontend code)
/generator/... (contains the GeneratorService code)
/validator/... (contains the ValidatorService code)
start.sh and start.bat (scripts to launch the application)
The start.sh script (and start.bat for Windows) is used to launch all services. Once executed, the FrontEnd will be accessible at localhost:8080
