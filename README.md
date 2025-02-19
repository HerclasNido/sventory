![Sventory Logo](ui/public/sventory-logo.svg)

# Sventory

Sventory is an **inventory management software** designed for businesses and individuals who need an efficient way to track and manage their inventory. It provides powerful features for organizing items across multiple organizations, locations, and categories.

## Features

### ✅ Core Features (Implemented)

- **Multi-Organization Support**: Manage multiple organizations under one account.
- **Multiple Places Per Organization**: Track inventory across warehouses, offices, etc.
- **Nested Locations**: Define hierarchical storage locations (e.g., *Zone 1 > Racking 3 > Box 4*).
- **Item Categories**: Organize inventory with parent-child item categories (e.g., *Electronics > Computers*).
- **Authentication**: Secure user authentication using **JWT**.
- **Rich Item Data**: Each item includes many useful fields (e.g., *SKU, barcode, cost price, selling price, msrp, reorder point, quantity...*).

### 🚀 Planned & Desired Features

- **Role-Based Access Control (RBAC)**: Assign roles and permissions to users.
- **Transaction Tracking**: Keep records of inventory movement.
- **Dashboard**: View useful analytics and insights.
- **Reports**: Generate detailed inventory reports.
- **Third-Party Integrations**: Connect with **QuickBooks** and other apps.
- **Advanced UI Customization**: More settings to personalize the interface.
- **Dark/Light Mode**: Switch themes easily.
- **Mobile App**: Manage inventory on the go with barcode scanning capabilities.
- **API Documentation**: Detailed documentation for developers.
- **Localization**: Support for multiple languages.
- **Automated Backups**: Keep your data safe with regular backups.
- **Notifications System**: Get alerts for low stock, etc.

## Tech Stack

### 🛠 Backend API

- **Language**: Go
- **Frameworks/Libraries**: `net/http`, `gorm`, `gqlgen`
- **Database**: PostgreSQL
- **Authentication**: JWT-based authentication

### 🌐 Frontend UI

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS
- **State Management**: Apollo Client
- **GraphQL Codegen**: Type-safe GraphQL queries
- **UI Components**: Tabler Icons, ShadCN components

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Go](https://golang.org/dl/)
- [Node.js](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)

### Clone the Repository

```sh
git clone https://github.com/HerclasNido/sventory.git
```

### Database Setup
Make sure you have PostgreSQL installed and running.
Create a new database:
```sh
psql -U postgres
CREATE DATABASE sventory;
```
Rename the api `.env.example` file to `.env` and update the file with your database credentials.

### Backend Setup

```sh
cd sventory/api
go mod tidy
go run cmd/server/main.go
```

### Frontend Setup

```sh
cd ../ui
npm install
npm run dev
```

## Contributing

We welcome contributions! To get started:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

## License

Sventory is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## Contact

If you have questions or suggestions, feel free to open an issue or reach out on GitHub.

---

**🚀 Let's build the best inventory management system together!**
