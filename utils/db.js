// utils/db.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Function to open the database connection
export async function openDB() {
  return open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  });
}
