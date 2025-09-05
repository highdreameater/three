import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// These lines are needed to correctly resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

// Handle favicon requests cleanly
app.get('/favicon.ico', (req, res) => res.status(204).send());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// 📦 NEW: Serve the 'three' module from node_modules
app.use('/scripts', express.static(path.join(__dirname, 'node_modules/three/build')));


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});