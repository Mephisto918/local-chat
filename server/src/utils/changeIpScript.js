import os from 'os';
import fs from 'fs';

export const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address; // Return the first non-internal IPv4 address
      }
    }
  }
  return "127.0.0.1"; // Default to localhost if no IP found
}

export const updateEnvFile = (ip, PORT) => {
  const envPath = "../.env"; // Adjust path based on project structure
  const content = `MACHINE_API_URL=http://${ip}:${PORT}\n`;
  fs.writeFileSync(envPath, content, { encoding: "utf8" });
}

// export default { getLocalIP, updateEnvFile };
