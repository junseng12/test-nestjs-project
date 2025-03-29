# Main Directory Structure

test-nestjs-project/
├── package.json
├── tsconfig.json
├── nest-cli.json
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── student/
│   │   ├── student.controller.ts
│   │   ├── student.module.ts
│   │   ├── student.service.ts
│   │   └── student.repository.ts
└── test/
    └── app.e2e-spec.ts

# NestJS Student API Project

This project is a simple RESTful API built with [NestJS](https://nestjs.com/), designed to manage student-related data as part of backend learning and practice.

## Features

- REST API with modular architecture
- Basic CRUD operations for "students"
- Service-repository pattern with dependency injection
- Ready for extension with database (not included)

## Getting Started

### Installation

```bash
npm install
```

### Running the Server

```bash
npm run start:dev
```

Server will start on: http://localhost:3000

### API Routes

- GET /student
- POST /student
- PATCH /student/:id
- DELETE /student/:id

No database connection is currently configured. Data persistence may be mocked or in-memory.

### Tech Stack
- Framework: NestJS (Node.js)
- Language: TypeScript
- Testing: Jest, @nestjs/testing

### License
This project is for educational purposes.
