const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/config", (req, res) => {
  res.json({ success: true });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.post("/sendEmail", (req, res) => {
  const messageBody = `
  <p>Someone reached out to you via your portfolio!</p>
  <h2>Contact Information</h2>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Company: ${req.body.company}</li>
    <li>Phone: ${req.body.phone}</li>
  </ul>
  <p>Message: ${req.body.message}</p>
  `;
  const firstName = req.body.name.split(' ')[0];
  res.json({
    error: false,
    message: `Thanks for reaching out, ${firstName}. I look forward to talking with you soon!`,
  });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
