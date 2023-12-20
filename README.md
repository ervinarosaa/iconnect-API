# ICONNECT-API

API for IConnect app.

**Language used:** JavaScript  
**Framework used:** Express.js  
**Database used:** MySQL
**Documentation via Postman:** [Postman Documentation URL](https://docs.google.com/document/d/1nncNJntdvPAomJyjQxKhRkxLWZj6AAzE/edit?usp=sharing&ouid=114610575091302379646&rtpof=true&sd=true)

## Guidelines for Using the API :

### Configure Database (adjust the sequence of running stages below)
1. Create Database "iconnectdb".
2. Import file "createTable-iconnectDB.sql".
3. Install dotenv module in your Terminal.
4. Rename ".env.example" file to ".env".
5. Setup the configuration for the database connection in ".env" file.

### Running Locally
1. Download the repository zip folder.
2. Extract it in the local C drive.
3. Open the API folder in the text editor (Visual Studio Code).
4. Configure the database **as mentioned above.**
5. Start the server via terminal, for example, `npm start` for Node.js/Express.js.
6. Run the API using tools like Thunder Client/Postman:
   - Open the Postman application or the "Thunder Client" extension in VSCode.
   - Click the "New Request" button.
   - Define the method (GET, POST, PUT, DELETE, etc.) and enter the URL of the endpoint you want to test.
   - Click send.

### Running on Google Cloud Platform
1. Create an instance in Cloud SQL with MySQL as the database engine.
2. Setup the configuration for MySQL and add a network `0.0.0.0/0`.
3. Clone the git repository in Cloud Shell.
4. Open the repository clone from Cloud Shell Editor.
5. Configure the database **as mentioned above.**
6. Go to Cloud Console, search for App Engine.
7. Create an app in App Engine and configure the application.
8. Go to Cloud Shell (make sure that you are in the project and entered the correct folder).
9. Deploy the API with the command `gcloud app deploy`.
10. After the process is complete, run `gcloud app browse`, then click the Base URL of the API.
