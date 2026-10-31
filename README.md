# ✈️ TravelMemory – Your Journey, Your Story

TravelMemory is a full-stack web application that allows users to record, manage and revisit their travel experiences. Users can add trip details, document places they have visited, save accommodation information, record expenses and share their travel memories.

🌐 **Live Application:** https://nawaz.bond/  
💻 **GitHub Repository:** https://github.com/Khaja974/TravelMemory

---

## 📌 Project Overview

TravelMemory is developed using the MERN stack (MongoDB, Express.js, React.js and Node.js).

The application provides a simple and attractive interface for storing travel experiences. The backend exposes REST APIs, while MongoDB Atlas stores the trip information.

The application is deployed on AWS EC2 and made accessible through a custom domain with HTTPS.

## ✨ Key Features

- **Home Page:** View available travel experiences.
- **My Experiences:** Browse saved travel memories.
- **Add Experience:** Add a new trip with travel information.
- **Trip Details:** View complete information about an individual trip.
- **Trip Information:** Store trip name, dates, hotels, places visited and total cost.
- **Travel Categories:** Classify experiences by trip type.
- **Featured Trips:** Highlight selected travel experiences.
- **Responsive Interface:** Access the application through desktop and mobile browsers.

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js |
| Programming Language | JavaScript |
| Frontend Styling | CSS |
| Backend | Node.js |
| Backend Framework | Express.js |
| Database | MongoDB Atlas |
| API Communication | REST API |
| Cloud Hosting | AWS EC2 |
| Web Server / Reverse Proxy | Nginx |
| Process Management | PM2 |
| Domain | nawaz.bond |
| Security | HTTPS / SSL |
| Source Code Management | Git and GitHub |

## 🏗️ Application Architecture

The application follows a three-tier architecture:

1. **Presentation Layer:** React.js provides the user interface.
2. **Application Layer:** Node.js and Express.js handle API requests and application logic.
3. **Data Layer:** MongoDB Atlas stores travel experiences and trip information.

### Application Flow

User Browser → HTTPS / Nginx → React Frontend → Node.js / Express REST API → MongoDB Atlas

The application is hosted on AWS EC2. PM2 manages the backend process to support continuous application execution.

## 📂 Project Structure

```text
TravelMemory/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── package.json
│   └── index.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── url.js
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

*Note: The structure above shows the main project organization. Individual folders and files may vary according to the implementation.*

## ⚙️ Installation and Setup

### Prerequisites

Install the following software:

- Node.js and npm
- Git
- MongoDB Atlas account
- Code editor (Visual Studio Code recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/Khaja974/TravelMemory.git
cd TravelMemory
```

### 2. Configure the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
PORT=3000
```

Replace the placeholder with your MongoDB Atlas connection string.

Start the backend:

```bash
node index.js
```

The backend API will run locally on:

`http://localhost:3000`

### 3. Configure the Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend folder:

```env
REACT_APP_BACKEND_URL=http://localhost:3000
```

Start the React application:

```bash
npm start
```

The frontend will be available at:

`http://localhost:3001`

## 🔗 API Endpoints

The backend provides REST API endpoints for managing travel experiences.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/trip/` | Retrieve all trips |
| GET | `/trip/:id` | Retrieve a specific trip |
| POST | `/trip/` | Create a new trip |

### Sample Trip Request

**POST** `/trip/`

```json
{
  "tripName": "Incredible India",
  "startDateOfJourney": "19-03-2022",
  "endDateOfJourney": "27-03-2022",
  "nameOfHotels": "Hotel Namaste",
  "placesVisited": "Delhi, Kolkata, Chennai, Mumbai",
  "totalCost": 800000,
  "tripType": "leisure",
  "experience": "An unforgettable travel experience.",
  "image": "https://example.com/travel-image.jpg",
  "shortDescription": "Exploring India's culture and destinations.",
  "featured": true
}
```

## ☁️ AWS Deployment

TravelMemory is deployed on an AWS EC2 instance.

### Deployment Components

- **AWS EC2:** Hosts the application.
- **Ubuntu Server:** Operating system for the EC2 instance.
- **Nginx:** Serves the React frontend and handles web requests.
- **Node.js / Express:** Runs the backend API.
- **PM2:** Manages the backend process.
- **MongoDB Atlas:** Provides cloud database services.
- **Elastic IP:** Provides a stable public IP address.
- **Custom Domain:** `nawaz.bond`
- **Certbot:** Used to configure the SSL/TLS certificate.
- **HTTPS:** Secures communication with the website.

### Live Deployment

https://nawaz.bond/

## 🧪 Testing and Validation

The following application checks have been performed during development:

- React frontend compilation and build.
- Backend server startup.
- MongoDB Atlas connection.
- GET API testing for trip records.
- Individual trip details retrieval.
- Adding a travel experience through the application.
- AWS EC2 deployment validation.
- Nginx service validation.
- PM2 process status validation.
- Domain and HTTPS connectivity checks.

## 🔐 Security Considerations

- Store MongoDB credentials in environment variables.
- Do not commit `.env` files to GitHub.
- Keep database credentials and API keys private.
- Restrict MongoDB Atlas network access to trusted sources.
- Restrict SSH access to authorized IP addresses.
- Use HTTPS for secure website communication.

## 🚀 Future Enhancements

The following features can be considered for future development:

- User registration and authentication.
- Individual user travel dashboards.
- Edit and delete travel experiences.
- Search and filter trips.
- Upload multiple travel photographs.
- Interactive maps for visited destinations.
- Travel expense reports and summaries.

## 👨‍💻 Author

**Khaja Nawaz Shaik**

Full-Stack Application Development Project

GitHub: https://github.com/Khaja974

Live Project: https://nawaz.bond/

---

## 📄 License

This project is licensed under the MIT License. Refer to the `LICENSE` file for details.

---

**TravelMemory – Every journey has a story worth remembering!** ✈️
