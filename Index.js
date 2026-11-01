const express = require('express');
const app = express();
app.use(express.json());

// 1. Yeh aapka main loader URL banega
app.get('/loader', (req, res) => {
    // Yahan apna asli Roblox script daalein jo aap run karna chahte hain
    const myRobloxScript = `
        print("Hello from Render Server!")
        -- Aapka baki saara Lua code yahan aayega
    `;
    res.send(myRobloxScript);
});

// 2. Yeh loop check/heartbeat ke liye checkpost hai
app.post('/heartbeat', (req, res) => {
    res.status(200).json({ status: "alive", message: "Loop is working perfectly!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
