import fs from "fs/promises";
// สร้าง middleware ในการ Log ตัว Request ที่เข้ามาในทุกๆ API Routes
const logging = async (req, res, next) => {
  try {
    const text = `IP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}\n`;
    await fs.appendFile("logs.txt", text);
  } catch {
    await fs.appendFile(
      "logs.txt",
      `Logging Error on IP: ${req.ip}, Method: ${req.method}, ${req.originalUrl}\n`
    );
  }
  next(); // อย่าลืม next
};
// export middleware
export default logging;
