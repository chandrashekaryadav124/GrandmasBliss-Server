<<<<<<< HEAD
# GrandmasBliss-Server
=======
# JSON Server for User Registration and Login

This project sets up a JSON server to handle user registration and login functionalities. It uses `json-server` to create a RESTful API for managing user data.

## Project Structure

- **db.json**: This file serves as the database for the JSON server. It contains the data structure for users, including fields for first name, last name, email, phone, date of birth, address, username, and password.
  
- **server.js**: This file sets up and configures the JSON server. It imports the necessary modules, initializes the server, and specifies the routes for handling login and registration functionalities.

- **package.json**: This file is the configuration file for npm. It lists the dependencies required for the project, such as `json-server`, and includes scripts for starting the server.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the required dependencies:

   ```
   npm install
   ```

### Running the Server

To start the JSON server, run the following command:

```
npm start
```

The server will run on `http://localhost:3000` by default.

### API Endpoints

- **POST /users**: Register a new user. The request body should include the following fields:
  - firstName
  - lastName
  - email
  - phone
  - dob
  - street
  - city
  - state
  - country
  - zip
  - username
  - password

- **POST /login**: Log in an existing user. The request body should include:
  - username
  - password

### Example Request for Registration

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "dob": "1990-01-01",
  "street": "123 Main St",
  "city": "Anytown",
  "state": "CA",
  "country": "USA",
  "zip": "12345",
  "username": "johndoe",
  "password": "password123"
}
```

### Example Request for Login

```json
{
  "username": "johndoe",
  "password": "password123"
}
```

## License

This project is licensed under the MIT License.
>>>>>>> c578126 (json files added)
