
```markdown
# HotelClient - Hotel Booking System (Web)

A modern, responsive hotel booking web application built with **Angular 21**. This client application provides a seamless user experience for searching hotels, managing bookings, and user authentication.

## 🚀 Features

-   **User Authentication**: Comprehensive security module including Login, Registration (with OTP verification), and Forgot Password functionality.
-   **Hotel Search**: Advanced search interface for finding stays based on destination, dates, and visitor count.
-   **Interactive Maps**: Google Maps integration to view hotel locations.
-   **User Dashboard**: Profile management system to update personal details and profile pictures.
-   **Booking History**: Dedicated section for users to view and manage their previous and upcoming stays.
-   **Modern UI**: Built with Angular Material and SCSS, ensuring a high-quality, responsive design.
-   **SSR Support**: Server-Side Rendering enabled for better performance and SEO.

## 🛠️ Tech Stack

-   **Framework**: [Angular 21.0.0](https://angular.dev/)
-   **Language**: [TypeScript 5.9.2](https://www.typescriptlang.org/)
-   **UI Components**: [Angular Material 21.0.3](https://material.angular.dev/)
-   **Styling**: SCSS (Modular architecture)
-   **Maps**: [@angular/google-maps](https://github.com/angular/components/tree/main/src/google-maps)
-   **Utilities**: `ngx-cookie-service`, `RxJS`
-   **Test Runner**: [Vitest](https://vitest.dev/)
-   **Runtime**: Node.js 20+

## 📁 Project Structure
```
text
src/
├── app/
│   ├── components/     # Reusable UI elements (Header, Footer)
│   ├── pages/          # Main application views (Home, Search, Security, Settings)
│   ├── guards/         # Route protection logic
│   ├── services/       # API interaction and state management
│   ├── interceptors/   # HTTP request/response modification
│   └── app.routes.ts   # Client-side routing configuration
├── environments/       # Environment specific variables
└── styles.scss         # Global styles and variables
```
## ⚙️ Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (Recommended: v20.x or higher)
-   [Angular CLI](https://github.com/angular/angular-cli) installed globally (`npm install -g @angular/cli`)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/hotel-client.git
    cd hotel-client
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Development Server

Run the application locally:
```
bash
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Configuration

Ensure your backend API endpoint is correctly set in `src/environments/environment.development.ts`:
```
typescript
export const environment = {
  baseUrl: 'http://localhost:9090/' // Replace with your backend URL
};
```
## 🏗️ Building and Testing

### Build
To build the project for production:
```
bash
ng build
```
The build artifacts will be stored in the `dist/` directory.

### Running Tests
Execute unit tests using Vitest:
```
bash
ng test
```
## 🛡️ Security
The application implements an `authGuard` to protect private routes (like `/settings`) and utilizes an `http-manager-interceptor` to automatically attach Bearer tokens to outgoing HTTP requests.

## 📄 License
This project is licensed under the MIT License. (See `src/app/components/footer-component/footer-component.html` for attribution details).

---
Coded with ❤️ for travelers.
```
