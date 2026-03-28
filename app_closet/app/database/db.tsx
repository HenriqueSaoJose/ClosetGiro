import * as SQLite from 'expo-sqlite';

export async function InicializeDB() {
  const db = await SQLite.openDatabaseAsync('closet.db');

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS Roupa (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      Nome TEXT,
      tamanho TEXT,
      Quantidade INTEGER
    );
  `);

  return db;
}