import { createClient } from "bedrock-protocol";

const client = createClient({
  host: "103.161.119.28", // IP server
  port: 30064,            // Cổng Bedrock
  username: "MyBotAFK",   // Tên bot
  version: "1.21.93"      // Phiên bản Bedrock
});

client.on("join", () => {
  console.log("✅ Bot đã join vào server Bedrock!");
});

client.on("disconnect", () => {
  console.log("❌ Bot bị ngắt, thử reconnect...");
  setTimeout(() => {
    client.connect();
  }, 5000);
});
