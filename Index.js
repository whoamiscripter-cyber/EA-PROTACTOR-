const express = require('express');
const app = express();
app.use(express.json());

app.get('/loader', (req, res) => {
    res.send(`loadstring(game:HttpGet("https://pastefy.app"))()`);
});

app.post('/heartbeat', (req, res) => {
    res.status(200).json({ status: "alive" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
