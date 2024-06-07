// const app = require("./src/app")

// const PORT = process.env.PORT || 8082

// const server = app.listen(PORT, () => {
//     console.log(`App start with ${PORT}`)
// })

// process.on('SIGINT', () => {
//     server.close(() => {
//         console.log('Exit Server Express')
//         process.exit(0)
//     })
// })
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});