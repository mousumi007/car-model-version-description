# car-model-version-description
This is sample project using built on typescript & nodejs. The aim is to connect with the database
and display model & version description of a vehicle depending upon the input parameters (company , brand , model).

#Instructions
1) For simplicity I have mocked the database response from the json file --> mock-output\db-model-response.json
2) The input parameters is being passed from file --> \constants\mock-input\request.json
3) Source code is in \src folder and compiled files in \dist folder
4) To run the application navigate to \dist folder and type command -> node .\app.js
5) Input parameters can be modified in request.json file to get the desired output
6) Mock response of database can be modified in \constants\mock-output\db-model-response.json
7) Sample Output : {"versions":[{"versionCode":"RN13","versionDescription":"family"},{"versionCode":"RN31","versionDescription":"family"}],"modelDescription":"Jeep "}