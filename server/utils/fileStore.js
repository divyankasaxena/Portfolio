import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "..", "data", "contacts.json");

function ensureFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]", "utf-8");
}

export function readContacts() {
  ensureFile();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function addContact(entry) {
  ensureFile();
  const all = readContacts();
  const record = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    ...entry,
    createdAt: new Date().toISOString(),
  };
  all.unshift(record);
  fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2), "utf-8");
  return record;
}
