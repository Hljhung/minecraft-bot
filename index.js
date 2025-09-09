const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot Minecraft đang chạy 🚀");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server chạy ở cổng ${port}`));
