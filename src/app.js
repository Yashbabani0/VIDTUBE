import express from "express";
import path from "path";

// Get the current directory name using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

// Serve static files (like images, CSS, JavaScript) from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve the HTML file at the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

export { app };
