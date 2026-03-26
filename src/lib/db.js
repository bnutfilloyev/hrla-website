import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'hrla.db');
const db = new Database(dbPath, { verbose: console.log });

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT,
    status TEXT DEFAULT 'New',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export function getLeads() {
  const stmt = db.prepare("SELECT * FROM leads ORDER BY createdAt DESC");
  return stmt.all();
}

export function createLead(name, phone, company) {
  const stmt = db.prepare("INSERT INTO leads (name, phone, company, status) VALUES (?, ?, ?, 'New')");
  const info = stmt.run(name, phone, company);
  return info.lastInsertRowid;
}

export function updateLeadStatus(id, status) {
  const stmt = db.prepare("UPDATE leads SET status = ? WHERE id = ?");
  stmt.run(status, id);
  return true;
}

export default db;
