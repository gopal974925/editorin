const express = require('express');
const cors = require('cors');
const auth = require('./middleware/authmiddleware');
const { isClient, isEditor } = require('./middleware/rolemiddleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewarers
app.use(cors());
app.use(express.json());

const connectDB = require('./db');

// Connect to MongoDB
connectDB();


app.get("/api/client-test", auth, isClient, (req, res) => {
  res.json({ msg: "Client route accessed" });
});

app.get("/api/editor-test", auth, isEditor, (req, res) => {
  res.json({ msg: "Editor route accessed" });
});
app.use("/api/auth", require("./routes/authroutes"));

app.use('/test', require('./routes/test'));

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
