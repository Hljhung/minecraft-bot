const bedrock = require("bedrock-protocol");

// thông tin server của bạn
const SERVER_HOST = "103.161.119.28";
const SERVER_PORT = 30064;

// thông tin bot
const BOT_USERNAME = "BotChat"; // tên bot hiển thị trong server

// tạo client
const client = bedrock.createClient({
  host: SERVER_HOST,
  port: SERVER_PORT,
  username: BOT_USERNAME,
  offline: true // nếu server không có xác thực Xbox
});

// khi bot kết nối xong
client.on("join", () => {
  console.log("✅ Bot đã vào server!");
});

// khi bot nhận tin nhắn
client.on("text", (packet) => {
  console.log(`[CHAT] ${packet.source_name}: ${packet.message}`);
});

// khi có lỗi
client.on("error", (err) => {
  console.error("❌ Lỗi:", err);
});

// khi bị kick
client.on("kick", (packet) => {
  console.log("⚠️ Bị kick:", packet);
});
