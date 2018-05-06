import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => res
  .sendFile(path.join(__dirname, './dist/index.html')));

app.listen(port);
