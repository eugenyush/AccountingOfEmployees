
# Accounting of Employees - Employee Management System

**Accounting of Employees** is a simple web application designed to manage and keep track of employees within a company. The application allows users to add, delete, and modify employee information, making it easier to manage an organization's workforce.

It is built using:

- **React**
- **JavaScript**
- **Bootstrap** (for responsive design and styling)
- **JSON Server** (for mock backend API)

## 👾 Features

- Add new employees with details like name, role, and salary.
- Delete employees from the database.
- Modify employee details.
- Mark employees as receiving bonuses or being promoted.
- User-friendly interface with responsive design.

## 📒 Process

I started by creating the structure of the application with React, setting up the main components to handle employee data. I then connected the app to a mock backend API using JSON Server, allowing for the simulation of a real backend.

The application was styled using Bootstrap for quick and responsive UI development, and additional custom styling was added for a polished look.

Subsequent development included adding features like marking employees for bonuses or promotions, and performing CRUD operations (Create, Read, Update, Delete) on employee data.

**NOTE:** The application uses JSON Server as a mock backend and is not connected to a live database. It serves as a demonstration of frontend functionality.

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. **Clone the repository to your local machine**:
   
   ```bash
   git clone https://github.com/eugenyush/AccountingOfEmployees.git
   cd AccountingOfEmployees
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the mock backend (JSON Server)**:

   ```bash
   npx json-server --watch db.json --port 5000
   ```

4. **Start the project**:

   ```bash
   npm start
   ```

   The app will run on [http://localhost:3000](http://localhost:3000), and the mock backend will run on [http://localhost:5000](http://localhost:5000).

## 📹 Video

