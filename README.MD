# 🛒 **E-Commerce Platform with .NET 9 & Angular 20** 🚀✨

This document provides an overview of our modern, full-featured **e-commerce application** built using **.NET 9** for the backend and **Angular 20** for the frontend. It delivers a seamless shopping experience with **real-time updates**, **responsive design**, and **secure payment integration**. 💻📱

---

## 🚀 **Technology Stack Overview** 🛠️

- ⚙️ **Backend:** ASP.NET Core 9
- 🌐 **Frontend:** Angular 20
- 🔄 **Real-time Communication:** SignalR
- 🎨 **Styling:** Tailwind CSS
- 💳 **Payment Integration:** Stripe API
- 🗂️ **Caching & Data Storage:** Redis

---

## 🎯 **Key Features Overview** 🌟

- 🛍️ **Product Management:** Browse, search, and filter products effortlessly.
- 🔄 **Real-time Updates:** Instant updates on orders and notifications via SignalR.
- 💳 **Secure Payments:** Stripe integration for seamless and secure transactions. Refunds and coupon codes included.
- 🔐 **Authentication & Authorization:** Secure user authentication and role-based access.
- 📊 **Order Tracking:** Admin dashboard for real-time order status and tracking updates.
- 🗂️ **User Cart Management:** Redis is used to store user cart data efficiently.
- ⚡ **Request Caching:** Redis caches frequent requests to improve performance and reduce server load.

---

## 🛠️ **Setup Instructions** 📝

To run this application locally, please follow the steps below:

### **🧰 Prerequisites** ⚡

Ensure you have the following installed:

1. 🐳 **Docker**
2. 🛠️ **.NET SDK v9**
3. 📦 **NodeJS (v20.11.1 or later)** _(Optional for Angular dev mode)_

### **📥 Step 1: Clone the Repository** 🗂️

```bash
git clone https://github.com/BernieTv/.NET-Eccomerce-with-Angular
cd .NET-Eccomerce-with-Angular
```

### **📦 Step 2: Restore Dependencies** 🔄

```bash
# From the solution folder
 dotnet restore

# Navigate to the Angular client folder
cd client
npm install
```

### **💳 Step 3: Stripe Configuration** 🔑

To enable payment functionality, set up your **Stripe keys**:

1. Create an `appsettings.json` file in the **API folder**:

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "StripeSettings": {
    "PublishableKey": "pk_test_REPLACEME",
    "SecretKey": "sk_test_REPLACEME",
    "WhSecret": "whsec_REPLACEME"
  },
  "AllowedHosts": "*"
}
```

2. Set up **Stripe CLI** for local webhook forwarding:

```bash
stripe login
stripe listen --forward-to https://localhost:5001/api/payments/webhook -e payment_intent.succeeded
```

### **🐘 Step 4: Start Database Services** 🗄️

The app requires **SQL Server** and **Redis**. Start these services using **Docker**:

```bash
docker compose up -d
```

Ensure no conflicting services are running on **port 1433** (SQL Server) or **port 6379** (Redis).

### **🚦 Step 5: Start the Application** ▶️

Run the **backend API**:

```bash
cd API
dotnet run
```

Access the app locally: 🌍 [https://localhost:5001](https://localhost:5001)

### **💻 Step 6: Run Angular Frontend in Development Mode** 🖥️

To enable **development mode with SSL**:

```bash
cd client/ssl
mkcert localhost
```

Start **Angular Dev Server**:

```bash
cd client
ng serve
```

Browse to: 🌐 [https://localhost:4200](https://localhost:4200)

### **🛡️ Step 7: Test Payments** 💵

Use **Stripe test cards** available [here](https://docs.stripe.com/testing#cards) for payment simulation.

---

## 📄 **License** 📜

This project is licensed under the **MIT License**. 📝
