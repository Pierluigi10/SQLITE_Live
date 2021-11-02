import SqliteManager from "./sqliteManager.js";

const sqm = new SqliteManager("./data/assessmentData.sqlite");
const records = await sqm.getRecordsWithSql(`SELECT * FROM flashcards`);
// const records = await sqm.getRecordsWithSql(`SELECT * FROM flashcards order by id desc`);
// const records = await sqm.getRecordsWithSql(`SELECT * FROM flashcards order by id desc limit 3`);
// const records = await sqm.getRecordsWithSql(`SELECT * FROM flashcards order by id desc WHERE front LIKE "%node%"`);
console.log(records);
