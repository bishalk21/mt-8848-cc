# Cricket Club - MT. 8848 Cricket Club

## About

This project is a simple Node.js project that demonstrates how to create a simple Node.js project. The project is a simple REST API that allows users to create, read, update, and delete users. The project uses the Express.js framework to create the REST API.

1. Requirements gathering > between Product Manager and client

- Features
  - Create an account by becoming a member
  - Form for new members to fill out (name, email, password, profile image, location, interests)
  - Form sanitization and validation
  - admin dashboard to manage teams, players, and matches
  - login for admin only
  - admin
    - add player
    - update player (edit, delete)

2. Design > Senior Engineer, Product Manager, and UI/UX Designer

- Architecture

  - Microservices
    - Frontend UI > React.js
    - Backend API > Node.js

- LLD (Low Level Design)

  - Database Schema Design

    - think about the collections and documents needed

      ```
            - users collection
               - \_id
               - name
               - email
               - password
               - profile
                  - bio
                  - image
                  - location
                  - interests

            - players collection
               - \_id
               - name
               - image
               - role
               - batting_style
               - bowling_style
      ```

- API EndPoints Design

| HTTP Method | EndPoint          | Description             |
| ----------- | ----------------- | ----------------------- |
| GET         | /api/v1/users     | Get all users           |
| POST        | /api/v1/users     | Create a new user       |
| GET         | /api/v1/users/:id | Get a single user by id |
| PUT         | /api/v1/users/:id | Update a user by id     |
| DELETE      | /api/v1/users/:id | Delete a user by id     |
