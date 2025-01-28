import { app } from "./app.js";
import path from "path";

const PORT = 7000;

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Change 'index.html' to match the actual path
});
