const express = require('express');
const app = express();
app.use(express.json());

// Sirf loadstring ko chhupane aur load karwane ke liye main URL
app.get('/loader', (req, res) => {
    // Aapki exact loadstring yahan server ke andar completely safe hai
    const mySecureString = `loadstring(game:HttpGet("https://pastefy.app/uzhwP5jn/raw"))()`;
    
    // Server bina link dikhaye ise execute hone ke liye client ko bhej dega
    res.send(mySecureString);
});

// Heartbeat tracking test endpoint
app.post('/heartbeat', (req, res) => {
    res.status(200).json({ status: "alive", message: "Loop tracking running fine!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Secure Server live on port ${PORT}`));
