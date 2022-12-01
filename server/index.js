const express = require('express');
const cors = require('cors');
const app = express();
const port = 8800;

app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.json({'name':'Hello, World!'})
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });