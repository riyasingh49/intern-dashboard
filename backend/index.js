const express = require('express');
const cors = require('cors'); // ✅ Add this line

const app = express();
const port = process.env.PORT || 4000;

app.use(cors()); // ✅ This enables CORS for all origins

app.get('/api/intern', (req, res) => {
  res.json({
    name: "Jane Doe",
    referralCode: "janedoe2025",
    donationsRaised: 3500,
    rewards: [
      { title: "T‑shirt", unlocked: true },
      { title: "Coffee Mug", unlocked: false }
    ]
  });
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
