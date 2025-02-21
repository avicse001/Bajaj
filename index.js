const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// GET Method
app.get("/bfhl", (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

// POST Method
app.post("/bfhl", (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ "is_success": false, "message": "Invalid input" });
    }

    const user_id = "nicky_kumari_21032002";
    const email = "2102013.ece.cgc@cgc.edu.in";
    const roll_number = "2102013";
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

    res.json({
        "is_success": true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
