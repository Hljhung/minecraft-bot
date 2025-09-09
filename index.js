import { createBot } from "mineflayer-bedrock";

const bot = createBot({
  host: "103.161.119.28", // IP server của bạn
  port: 30064,            // Port bạn vừa cung cấp
  username: "MyBotAFK"    // Tên bot hiển thị trong server
});

bot.on("spawn", () => {
  console.log("✅ Bot đã join vào server!");
});

// Nếu bot bị kick thì reconnect
bot.on("end", () => {
  console.log("❌ Bot bị ngắt kết nối, đang thử join lại...");
  setTimeout(() => {
    bot.connect();
  }, 5000);
});
