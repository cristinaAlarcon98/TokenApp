@echo off

echo Starting GeneratorService...
cd generator
mvn spring-boot:run
cd ..
echo GeneratorService started.

echo Starting ValidatorService...
cd validator
mvn spring-boot:run
cd ..
echo ValidatorService started.

echo Starting FrontEnd...
cd frontend
npm install
npm start
echo FrontEnd started.

