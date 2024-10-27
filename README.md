# Horizon-Forge-Backend 🚀

Welcome to the **Horizon-Forge-Backend**! This is the backend API for the Horizon Forge project, providing a robust, scalable, and flexible system for managing data and handling requests from various clients. The Horizon-Forge-Backend is designed with RESTful principles and aims to be easy to integrate and extend for developers building applications on top of it. This Project is part of a big refactoring of the [Horizon Forge Web RPG](https://github.com/Lenzork/Horizon-Forge--Web-RPG)

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview 🌐

The Horizon-Forge-Backend provides core functionality for managing resources such as users, sessions, and application-specific data. This API is built with scalability and security in mind, leveraging modern backend practices and design patterns.

## Getting Started 🚀

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- [Deno](https://deno.com/) (v2.0.3 or higher)
- [Mysql Server](https://dev.mysql.com/downloads/mysql/8.4.html) (v8.0 or higher)

### Installation 🛠️

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Lenzork/Horizon-Forge-Backend.git
   cd Horizon-Forge-Backend
   ```

3. **Configure environment variables**: Create a `.env` file in the root directory and set up the necessary environment variables. See [Configuration](#configuration) for details.

4. **Run the application**:

   ```bash
   deno .\main.ts
   ```

   The API should now be running on `http://localhost:8000` by default.

## Configuration ⚙️

The API requires a few environment variables for proper setup. Add these to your `.env` file:

```plaintext
BACKEND_PORT=8000
DATABASE_HOST="<YOUR_DATABASE_HOST>"
DATABASE_USER="<YOUR_DATABASE_USER>"
DATABASE_PASSWORD="<YOUR_DATABASE_PASSWORD>"
DATABASE_NAME="<YOUR_DATABASE_NAME>"
DATABASE_PORT=<YOUR_DATABASE_PORT>
JWT_SECRET=<your_jwt_secret>
```

Additional configuration options can be found in the `config` folder.

## API Endpoints 🔗

Below are some core endpoints of the Horizon-Forge-Backend. For a full list of available endpoints and parameters, refer to the API documentation.

| Method | Endpoint        | Description                  |
| ------ | --------------- | ---------------------------- |
| GET    | `/api/items`    | Retrieve all items           |
| POST   | `/api/items`    | Add an item          |
| PUT   | `/api/items`    | Edit an item         |
| DELETE   | `/api/items`    | Delete an item          |
| GET    | `/api/characters`    | Retrieve all characters           |
| POST   | `/api/characters`    | Add a character          |
| PUT   | `/api/characters`    | Edit a character         |
| DELETE   | `/api/characters`    | Delete a character          |

### Error Handling

Horizon-Forge-Backend returns standard HTTP status codes for success and error states. Detailed error messages are provided in the response for easier debugging.

## Contributing 🤝

We welcome contributions to Horizon-Forge-Backend! If you'd like to contribute, please fork the repository and submit a pull request. Here are some ways to get involved:

- Report and fix issues
- Submit feature requests
- Improve documentation

To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

For major changes, please open an issue first to discuss what you would like to change.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Thank you for checking out Horizon-Forge-Backend! We’re excited to build something great together. Happy coding!
