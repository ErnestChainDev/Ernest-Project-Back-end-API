# 🏨 Hotel Management API

<p>
A comprehensive RESTful API for hotel management built with Node.js, Express, and MongoDB. This API provides complete CRUD operations for managing rooms, guests, and bookings with advanced features including input validation, pagination, filtering, automatic room status management, and proper error handling with correct HTTP status codes.
</p>

![Hotel Management System](https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=400&fit=crop)

---

## 🚀 Features

- **Full CRUD Operations:**
  - ✅ Rooms Management (Create, Read, Update, Delete)
  - ✅ Guests Management (Create, Read, Update, Delete)
  - ✅ Bookings Management (Create, Read, Update, Delete)

- **Advanced Relationship Features:**
  - ✅ Guest Booking History (`/api/guests/:id/bookings`)
  - ✅ Room Availability Checking for date ranges
  - ✅ Double-booking Prevention with conflict detection
  - ✅ Population of related data (Guest & Room info in Bookings)

- **Smart Automation:**
  - ✅ Automatic room status updates (available ↔ occupied)
  - ✅ Auto-calculation of total booking price
  - ✅ Automatic date validation (check-out must be after check-in)

- **Data Validation:**
  - ✅ Comprehensive input validation with Joi
  - ✅ Mongoose schema validation
  - ✅ Proper error messages and HTTP status codes (200, 201, 400, 404, 500)

- **Pagination & Filtering:**
  - ✅ Pagination on all list endpoints (`?page=1&limit=10`)
  - ✅ Status filtering (`?status=available`)
  - ✅ Type filtering (`?type=Double`)
  - ✅ Price range filtering (`?minPrice=100&maxPrice=200`)
  - ✅ Search functionality for guests

- **RESTful Design:**
  - ✅ Proper REST API conventions with plural nouns
  - ✅ JSON request/response format
  - ✅ CORS enabled for cross-origin requests

---

## 🛠️ Tech Stack

- **Runtime:** Node.js (v18+)
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Database Hosting:** MongoDB Atlas (Cloud)
- **Deployment:** Vercel (Serverless)
- **Validation:** Joi
- **Additional Libraries:** dotenv, cors, morgan

---

## 📁 Project Structure

```
hotel-management-api/
│
├── config/
│   └── database.js                 # MongoDB connection configuration
├── controllers/
│   ├── roomController.js           # Room business logic
│   ├── guestController.js          # Guest business logic
│   └── bookingController.js        # Booking business logic
├── models/
│   ├── Room.js                     # Room schema & model
│   ├── Guest.js                    # Guest schema & model
│   └── Booking.js                  # Booking schema & model
├── routes/
│   ├── rooms.js                    # Room route definitions
│   ├── guests.js                   # Guest route definitions
│   └── bookings.js                 # Booking route definitions
├── middleware/
│   ├── errorHandler.js             # Global error handling
│   └── validation.js               # Joi validation schemas
├── utils/
│   └── seedData.js                 # Database seeding script
├── .env                            # Environment variables (DO NOT COMMIT)
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore file
├── vercel.json                     # Vercel deployment config
├── package.json                    # Project dependencies
├── server.js                       # Application entry point
└── README.md                       # Project documentation
```

---

## ⚙️ Installation & Setup

### Prerequisites

- ✅ **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- ✅ **MongoDB Atlas Account** (free tier) - [Sign up here](https://www.mongodb.com/cloud/atlas/register)
- ✅ **Postman** (optional, for testing) - [Download here](https://www.postman.com/downloads/)
- ✅ **Git** (for version control) - [Download here](https://git-scm.com/downloads)

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone <your-repository-url>
cd hotel-management-api

# Or download and extract the ZIP file
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:

- express - Web framework
- mongoose - MongoDB ODM
- dotenv - Environment variables
- cors - Cross-Origin Resource Sharing
- morgan - HTTP request logger
- joi - Data validation

### Step 3: Set Up MongoDB Atlas

#### 3.1 Create MongoDB Atlas Account

- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Sign up for a free account
- Verify your email

#### 3.2 Create a New Cluster

- Click "Build a Database"
- Choose "M0 FREE" tier
- Select a cloud provider (AWS recommended)
- Choose a region closest to you
- Name your cluster (e.g., hotel-cluster)
- Click "Create" (wait 3-5 minutes for setup)

#### 3.3 Create Database User

- Go to "Database Access" (left sidebar)
- Click "Add New Database User"
- Authentication Method: Password
- Username: hotelAdmin (or your choice)
- Password: Generate a secure password (SAVE THIS!)
- Database User Privileges: "Atlas admin"
- Click "Add User"

#### 3.4 Configure Network Access

- Go to "Network Access" (left sidebar)
- Click "Add IP Address"
- Click "Allow Access from Anywhere" (0.0.0.0/0)
- Click "Confirm"

⚠️ Note: For production, restrict to specific IP addresses

#### 3.5 Get Connection String

- Go to "Database" (left sidebar)
- Click "Connect" on your cluster
- Choose "Connect your application"
- Driver: Node.js, Version: 4.1 or later
- Copy the connection string (looks like):

```
mongodb+srv://hotelAdmin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### Step 4: Configure Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB Connection
MONGO_URI=mongodb+srv://hotelAdmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/hotel-management?retryWrites=true&w=majority

# Server Configuration
PORT=5000
NODE_ENV=development

# API Version (optional)
API_VERSION=v1
```

⚠️ **Important:**

- Replace `YOUR_PASSWORD` with your actual MongoDB user password
- Replace `cluster0.xxxxx.mongodb.net` with your actual cluster URL
- Add `/hotel-management` before the `?` to specify the database name
- Never commit `.env` to GitHub (it's in `.gitignore`)

### Step 5: Seed the Database

Populate the database with sample data:

```bash
npm run seed
```

You should see:

```
✅ MongoDB Connected: cluster0.xxxxx.mongodb.net
🗑️  Cleared existing data
✅ Created 8 rooms
✅ Created 5 guests
✅ Created 2 bookings
🎉 Database seeded successfully!
```

---

## ▶️ How to Run

### 🚀 Development Mode (with auto-restart):

```bash
npm run dev
```

### 🏭 Production Mode:

```bash
npm start
```

You should see:

```
✅ MongoDB Connected: cluster0.xxxxx.mongodb.net
🚀 Server running on port 3000
📍 Environment: development
✅ Your API is now running at: http://localhost:3000
```

---

## 📡 API Endpoints

### Base URL

- Local Development: `http://localhost:3000`
- Production (Vercel): `https://your-app-name.vercel.app`

### 🏠 Root Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information and available endpoints |
| GET | `/health` | Health check endpoint |

### 🛏️ Rooms Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/rooms` | Get all rooms (paginated) |
| GET | `/api/rooms?page=1&limit=10` | Get rooms with pagination |
| GET | `/api/rooms?status=available` | Filter rooms by status |
| GET | `/api/rooms?type=Double` | Filter rooms by type |
| GET | `/api/rooms?minPrice=100&maxPrice=200` | Filter rooms by price range |
| GET | `/api/rooms/:id` | Get single room by ID |
| POST | `/api/rooms` | Create new room |
| PUT | `/api/rooms/:id` | Update room |
| DELETE | `/api/rooms/:id` | Delete room |

**Query Parameters:**

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `status` - Filter by status (available, occupied, maintenance)
- `type` - Filter by type (Single, Double, Suite, Deluxe, Presidential)
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter

### 👥 Guests Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/guests` | Get all guests (paginated) |
| GET | `/api/guests?search=john` | Search guests by name/email |
| GET | `/api/guests?page=1&limit=10` | Get guests with pagination |
| GET | `/api/guests/:id` | Get single guest by ID |
| GET | `/api/guests/:id/bookings` | Get all bookings for a guest |
| POST | `/api/guests` | Create new guest |
| PUT | `/api/guests/:id` | Update guest |
| DELETE | `/api/guests/:id` | Delete guest |

**Query Parameters:**

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `search` - Search by name or email

### 📅 Bookings Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/bookings` | Get all bookings (paginated) |
| GET | `/api/bookings?status=confirmed` | Filter bookings by status |
| GET | `/api/bookings?guestId=xxx` | Filter bookings by guest |
| GET | `/api/bookings?roomId=xxx` | Filter bookings by room |
| GET | `/api/bookings/:id` | Get single booking by ID |
| POST | `/api/bookings` | Create new booking (with validation) |
| PUT | `/api/bookings/:id` | Update booking |
| DELETE | `/api/bookings/:id` | Delete booking |

**Query Parameters:**

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `status` - Filter by status (confirmed, checked-in, checked-out, cancelled)
- `guestId` - Filter by guest ID
- `roomId` - Filter by room ID

---

## 🧪 Testing with Postman

### Sample Request Examples

#### 1️⃣ Get All Rooms

```http
GET http://localhost:3000/api/rooms
Content-Type: application/json
```

**Response (200 OK):**

```json
{
  "success": true,
  "count": 8,
  "total": 8,
  "page": 1,
  "pages": 1,
  "data": [
    {
      "_id": "672abc123def456789012345",
      "number": "101",
      "type": "Single",
      "price": 100,
      "status": "available",
      "capacity": 1,
      "amenities": ["WiFi", "TV", "AC"],
      "createdAt": "2025-10-21T00:00:00.000Z",
      "updatedAt": "2025-10-21T00:00:00.000Z"
    }
  ]
}
```

#### 2️⃣ Create a New Room

```http
POST http://localhost:3000/api/rooms
Content-Type: application/json

{
  "number": "501",
  "type": "Suite",
  "price": 300,
  "status": "available",
  "capacity": 4,
  "amenities": ["WiFi", "TV", "AC", "Mini Bar", "Jacuzzi"]
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "message": "Room created successfully",
  "data": {
    "_id": "672abc987fed654321098765",
    "number": "501",
    "type": "Suite",
    "price": 300,
    "status": "available",
    "capacity": 4,
    "amenities": ["WiFi", "TV", "AC", "Mini Bar", "Jacuzzi"]
  }
}
```

#### 3️⃣ Create a New Guest

```http
POST http://localhost:3000/api/guests
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "address": "123 Main St, New York",
  "nationality": "USA",
  "idDocument": "P1234567"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "message": "Guest created successfully",
  "data": {
    "_id": "672abc123def456789012345",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "address": "123 Main St, New York",
    "nationality": "USA",
    "idDocument": "P1234567"
  }
}
```

#### 4️⃣ Create a Booking

```http
POST http://localhost:3000/api/bookings
Content-Type: application/json

{
  "guestId": "672abc123def456789012345",
  "roomId": "672abc987fed654321098765",
  "checkIn": "2025-11-01T14:00:00Z",
  "checkOut": "2025-11-05T11:00:00Z",
  "numberOfGuests": 2,
  "specialRequests": "Late check-in requested"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "message": "Booking created successfully",
  "data": {
    "_id": "672abc456def123789456012",
    "guestId": {
      "_id": "672abc123def456789012345",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890"
    },
    "roomId": {
      "_id": "672abc987fed654321098765",
      "number": "501",
      "type": "Suite",
      "price": 300
    },
    "checkIn": "2025-11-01T14:00:00.000Z",
    "checkOut": "2025-11-05T11:00:00.000Z",
    "status": "confirmed",
    "totalPrice": 1200,
    "numberOfGuests": 2,
    "specialRequests": "Late check-in requested"
  }
}
```

#### 5️⃣ Get Guest's Booking History

```http
GET http://localhost:3000/api/guests/672abc123def456789012345/bookings
Content-Type: application/json
```

**Response (200 OK):**

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "672abc456def123789456012",
      "guestId": "672abc123def456789012345",
      "roomId": {
        "number": "501",
        "type": "Suite",
        "price": 300
      },
      "checkIn": "2025-11-01T14:00:00.000Z",
      "checkOut": "2025-11-05T11:00:00.000Z",
      "status": "confirmed",
      "totalPrice": 1200
    }
  ]
}
```

#### 6️⃣ Update Room Status

```http
PUT http://localhost:3000/api/rooms/672abc987fed654321098765
Content-Type: application/json

{
  "status": "maintenance"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Room updated successfully",
  "data": {
    "_id": "672abc987fed654321098765",
    "number": "501",
    "type": "Suite",
    "price": 300,
    "status": "maintenance"
  }
}
```

#### 7️⃣ Delete a Room

```http
DELETE http://localhost:3000/api/rooms/672abc987fed654321098765
Content-Type: application/json
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Room deleted successfully",
  "data": {}
}
```

---

## 💾 Response Formats

### ✅ Success Response (List/Paginated)

```json
{
  "success": true,
  "count": 10,
  "total": 45,
  "page": 1,
  "pages": 5,
  "data": [ /* array of objects */ ]
}
```

### ✅ Success Response (Single Resource)

```json
{
  "success": true,
  "data": { /* single object */ }
}
```

### ✅ Success Response (Create/Update)

```json
{
  "success": true,
  "message": "Resource created successfully",
  "data": { /* created/updated object */ }
}
```

### ❌ Error Response (400 - Validation Error)

```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email"
    },
    {
      "field": "price",
      "message": "Price cannot be negative"
    }
  ]
}
```

### ❌ Error Response (404 - Not Found)

```json
{
  "success": false,
  "message": "Room not found"
}
```

### ❌ Error Response (400 - Business Logic)

```json
{
  "success": false,
  "message": "Room is already booked for the selected dates"
}
```

### ❌ Error Response (500 - Server Error)

```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

## 🗃️ Database Schema

### Room Schema

```javascript
{
  number: String (required, unique, trimmed),
  type: String (required, enum: ['Single', 'Double', 'Suite', 'Deluxe', 'Presidential']),
  price: Number (required, min: 0),
  status: String (enum: ['available', 'occupied', 'maintenance'], default: 'available'),
  amenities: [String] (default: []),
  capacity: Number (default: 1, min: 1),
  timestamps: true (createdAt, updatedAt)
}
```

### Guest Schema

```javascript
{
  name: String (required, min: 2 characters, trimmed),
  email: String (required, unique, validated, lowercase, trimmed),
  phone: String (required, validated, trimmed),
  address: String (optional, trimmed),
  nationality: String (optional, trimmed),
  idDocument: String (optional, trimmed),
  timestamps: true (createdAt, updatedAt)
}
```

### Booking Schema

```javascript
{
  guestId: ObjectId (required, ref: 'Guest'),
  roomId: ObjectId (required, ref: 'Room'),
  checkIn: Date (required),
  checkOut: Date (required, must be after checkIn),
  status: String (enum: ['confirmed', 'checked-in', 'checked-out', 'cancelled'], default: 'confirmed'),
  totalPrice: Number (auto-calculated, min: 0),
  numberOfGuests: Number (default: 1, min: 1),
  specialRequests: String (optional, trimmed),
  timestamps: true (createdAt, updatedAt)
}
```

**Auto-calculated Fields:**

- `totalPrice` - Calculated as: (checkOut - checkIn in days) × room.price

---

## 🎯 Business Logic & Validation

### Room Management

- ✅ Room numbers must be unique
- ✅ Price cannot be negative
- ✅ Status must be one of: available, occupied, maintenance
- ✅ Type must be one of: Single, Double, Suite, Deluxe, Presidential
- ✅ Capacity must be at least 1

### Guest Management

- ✅ Email must be unique and valid format
- ✅ Phone number format validation
- ✅ Name must be at least 2 characters
- ✅ Search works across name and email fields

### Booking Management

- ✅ Check-out date must be after check-in date
- ✅ Guest and Room must exist before booking
- ✅ Room must be in available status to book
- ✅ Double-booking prevention (checks for overlapping dates)
- ✅ Total price calculated automatically
- ✅ Room status updates to occupied when booking is created
- ✅ Room status updates to available when booking is cancelled/checked-out

### Relationship Validation

- ✅ Cannot delete guest with active bookings
- ✅ Cannot delete room with active bookings
- ✅ Invalid ObjectId format returns proper error

---

## 🚨 HTTP Status Codes

| Code | Meaning | When Used |
|------|---------|-----------|
| 200 | OK | Successful GET, PUT, DELETE |
| 201 | Created | Successful POST (resource created) |
| 400 | Bad Request | Validation errors, business logic violations, invalid data |
| 404 | Not Found | Resource doesn't exist (invalid ID) |
| 500 | Server Error | Unexpected server errors, database connection issues |

---

## 🧹 Troubleshooting

### ❗ Installation Issues

**Problem: npm install fails**

```bash
# Solution: Clear npm cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Problem: Cannot find module 'express'**

```bash
# Solution: Install dependencies
npm install
```

### ❗ Database Connection Issues

**Problem: MongoDB Connection Error**

Solutions:

- Check your `.env` file - verify MONGO_URI is correct
- Ensure password doesn't contain special characters (or URL encode them)
- Verify IP whitelist in MongoDB Atlas includes 0.0.0.0/0
- Check if MongoDB Atlas cluster is running
- Make sure database name is specified in connection string

**Problem: Deprecation warnings for useNewUrlParser and useUnifiedTopology**

```bash
# Solution: These are removed in the fixed version
# Make sure config/database.js doesn't include these options
```

### ❗ Server Issues

**Problem: Server won't start**

```bash
# Check if port 5000 is already in use
# Solution 1: Change PORT in .env file
PORT=3000

# Solution 2: Kill process using port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Solution 2: Kill process using port 5000 (Mac/Linux)
lsof -ti:5000 | xargs kill -9
```

**Problem: [nodemon] app crashed**

```bash
# Check server logs for errors
# Common causes:
# 1. Missing .env file
# 2. Invalid MongoDB URI
# 3. Syntax errors in code
```

### ❗ API Testing Issues

**Problem: Postman shows "Could not connect"**

Solutions:

- Check if server is running (npm run dev)
- Verify correct URL (http://localhost:3000)
- Check firewall/antivirus settings
- Try using 127.0.0.1 instead of localhost

**Problem: Empty data returned from API**

```bash
# Solution: Run seed script to populate database
npm run seed
```

**Problem: Validation errors when creating resources**

Solutions:

- Check required fields are provided
- Verify data types match schema
- Ensure email format is valid
- Check that dates are in ISO format

### ❗ Deployment Issues (Vercel)

**Problem: Deployment fails**

Solutions:

- Ensure vercel.json is present
- Check Node version in package.json engines
- Verify environment variables are set in Vercel dashboard
- Check build logs for errors

**Problem: API works locally but not on Vercel**

Solutions:

- Add MongoDB Atlas IP to whitelist (0.0.0.0/0)
- Set NODE_ENV=production in Vercel environment variables
- Check that all required environment variables are set

---

## 🚀 Deployment to Vercel

### Step 1: Prepare for Deployment

- Ensure vercel.json exists in root directory
- Make sure .gitignore includes .env
- Push code to GitHub

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Option B: Using Vercel Dashboard

- Go to Vercel Dashboard
- Click "Add New Project"
- Import your GitHub repository
- Configure:
  - Framework Preset: Other
  - Root Directory: ./
  - Build Command: (leave empty)
  - Output Directory: (leave empty)

### Step 3: Add Environment Variables

- Go to Project Settings → Environment Variables
- Add the following:
  - `MONGO_URI` = Your MongoDB Atlas connection string
  - `NODE_ENV` = production

### Step 4: Redeploy

- Click "Redeploy" or push new commit to trigger deployment

### Step 5: Test Deployment

```bash
# Test your production API
curl https://your-app-name.vercel.app/health
curl https://your-app-name.vercel.app/api/rooms
```

Your API Base URL: `https://your-app-name.vercel.app`

---

## 📝 NPM Scripts

| Script | Command | Description |
|--------|---------|-------------|
| npm start | `node server.js` | Start server (production) |
| npm run dev | `nodemon server.js` | Start with auto-reload (development) |
| npm run seed | `node utils/seedData.js` | Populate database with sample data |

---

## 🧰 Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.18.2 | Web application framework |
| mongoose | ^8.0.0 | MongoDB object modeling (ODM) |
| dotenv | ^16.3.1 | Environment variable management |
| cors | ^2.8.5 | Cross-Origin Resource Sharing middleware |
| morgan | ^1.10.0 | HTTP request logger middleware |
| joi | ^17.11.0 | Schema validation library |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| nodemon | ^3.0.1 | Development auto-restart utility |

---

## 🧠 Best Practices & Tips

### General Tips

- ✅ Always run `npm run seed` after setting up to populate test data
- ✅ Use Postman collections to save and organize your API tests
- ✅ Keep your `.env` file secure and never commit it to GitHub
- ✅ Check MongoDB Atlas dashboard to verify data is being saved correctly
- ✅ Use query parameters for filtering: `?status=available&type=Suite`

### Development Tips

- ✅ Use `npm run dev` for development (auto-restarts on file changes)
- ✅ Check console logs for MongoDB connection status
- ✅ Test all CRUD operations before deployment
- ✅ Validate request bodies match schema requirements
- ✅ Use meaningful variable names and comments

### Security Tips

- ✅ Never commit `.env` file (use `.env.example` instead)
- ✅ Use strong passwords for MongoDB users
- ✅ Restrict MongoDB Atlas IP whitelist in production
- ✅ Validate all user input
- ✅ Use HTTPS in production

### Testing Tips

- ✅ Test happy paths (valid data)
- ✅ Test error cases (invalid data, missing fields)
- ✅ Test edge cases (empty strings, negative numbers)
- ✅ Test pagination with different page/limit values
- ✅ Test relationships (guest bookings, room availability)

---

## 📚 Additional Resources

- 📖 [Express.js Documentation](https://expressjs.com/)
- 📖 [Mongoose Documentation](https://mongoosejs.com/)
- 📖 [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- 📖 [Joi Validation Documentation](https://joi.dev/)
- 📖 [REST API Best Practices](https://restfulapi.net/)
- 📖 [Vercel Documentation](https://vercel.com/docs)

---

## 🎓 Project Requirements Compliance

| Requirement | Status | Implementation |
|-------------|--------|-----------------|
| Node.js + Express | ✅ Complete | Used Express.js framework |
| MongoDB via Mongoose | ✅ Complete | Mongoose ODM with schemas |
| Hosted DB (Atlas) | ✅ Complete | MongoDB Atlas cloud database |
| Full CRUD | ✅ Complete | All operations for Rooms, Guests, Bookings |
| HTTP Status Codes | ✅ Complete | 200, 201, 400, 404, 500 properly used |
| JSON Format | ✅ Complete | All requests/responses in JSON |
| Field Validation | ✅ Complete | Joi + Mongoose validation |
| Pagination | ✅ Complete | ?page=1&limit=10 on all list endpoints |
| Filtering | ✅ Complete | Status, type, price, search filters |
| CORS Enabled | ✅ Complete | CORS middleware configured |
| Security (secrets) | ✅ Complete | .env file with .gitignore |
| RESTful Design | ✅ Complete | Plural nouns, proper HTTP methods |
| Documentation | ✅ Complete | Comprehensive README |
| Seeded Data | ✅ Complete | Seed script with sample data |

---

## ✨ Extra Features Implemented

- ✅ Relationship endpoints (`/api/guests/:id/bookings`)
- ✅ Double-booking prevention with conflict detection
- ✅ Automatic price calculation based on nights × room price
- ✅ Room status automation (available ↔ occupied)
- ✅ Advanced filtering (price range, search, multiple filters)
- ✅ Data population (guest & room info in booking responses)
- ✅ Comprehensive validation (Joi + Mongoose)
- ✅ Error handling with descriptive messages
- ✅ Vercel deployment with serverless configuration

---

## 📄 License

This project is intended for educational purposes as part of a web development course.
Feel free to modify, extend, or reuse it for learning and demonstration purposes.

---

## 👨‍💻 Author

- **Created by:** ErnestChainDev
- **Project:** Hotel Management API
- **Purpose:** Educational - Web Development Portfolio

---

## 🤝 Contributing

While this is an educational project, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request
