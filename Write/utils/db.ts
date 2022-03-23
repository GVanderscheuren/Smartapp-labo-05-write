import {
  openDatabase,
  SQLError,
  SQLResultSet,
  SQLStatementCallback,
  SQLTransaction,
  SQLTransactionCallback,
  WebSQLDatabase,
} from 'expo-sqlite';

const DATABASE_NAME: string = 'write';

// const openDb = (name: string = DATABASE_NAME) => {
//   return openDatabase(name);
// };

// #1 open een database

// #2 maak een transaction aan

export const transaction = (
  name: string = DATABASE_NAME,
): Promise<SQLTransaction> => {
  const db: WebSQLDatabase = openDatabase(name);

  return new Promise((resolve, reject) =>
    db.transaction(
      (tx: SQLTransaction) => resolve(tx),
      (txError: SQLError) => reject(txError),
    ),
  );
};

export interface statementReturnType {
  res: SQLResultSet;
  tx: SQLTransaction;
}

export const statement = (
  tx: SQLTransaction,
  sql: string,
  params?: any[] | undefined,
): Promise<SQLResultSet> => {
  return new Promise((resolve, reject) => {
    tx.executeSql(
      sql,
      params,
      (tx: SQLTransaction, res: SQLResultSet) => resolve(res),
      (tx: SQLTransaction, error: SQLError) => {
        reject(error);
        return false;
      },
    );
  });
};

// #3 doe een insert (prepared!)

// #4 doe een read

// #5 denk na over een galante manier van werken in onze components

export const test = async () => {
  const tx: SQLTransaction = await transaction();

  const res: SQLResultSet | void = await statement(
    tx,
    'SELECT * FROM `lolz`',
  ).catch((err) => console.error(err));

  console.log(res);
};
