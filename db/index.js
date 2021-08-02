import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('saves.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS saves (
                    id INTEGER PRIMARY KEY NOT NULL,
                    itemId TEXT NOT NULL,
                    category TEXT NOT NULL,
                    createdby TEXT NOT NULL,
                    name TEXT NOT NULL,
                    image TEXT NOT NULL,
                    description TEXT NOT NULL,
                    price TEXT NOT NULL
                )`,
                [],
                () => { resolve() },
                (_, err) => { reject(err) },
            )
        })
    })
    return promise;
}

export const insertSaves = (
    itemId,
    category,
    createdby,
    name,
    image,
    description,
    price
) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO saves (itemId, category, createdby, name, image, description, price) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [itemId, category, createdby, name, image, description, price],
                (_, result) => { resolve(result) },
                (_, err) => { reject(err) },

            )
        })
    })
    return promise;
}

export const fetchSaves = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM saves;',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            )
        })
    })
    return promise;
}

export const deleteSaves = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM saves WHERE id=?;',
                [id],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            )
        })
    })
    return promise;
}
