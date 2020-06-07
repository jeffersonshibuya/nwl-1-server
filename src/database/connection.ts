import knex from "knex";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config();

let dbConfig = {};

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  dbConfig = {
    client: process.env.CLIENT,
    connection: {
      filename: path.resolve(__dirname, String(process.env.FILENAME)),
    },
    useNullAsDefault: true,
  };
} else {
  console.log("production");
  dbConfig = {
    client: "pg",
    connection: process.env.DATABASE_URL,
    searchPath: ["knex", "public"],
  };
}

const connection = knex(dbConfig);

// switch (process.env.NODE_ENV) {
//   case "development":
//     connection = knex({
//       client: "sqlite3",
//       connection: {
//         filename: path.resolve(__dirname, "database.sqlite"),
//       },
//       useNullAsDefault: true,
//     });
//     break;
//   case "production":
//     connection = knex({
//       client: "pg",
//       connection: process.env.DATABASE_URL,
//       searchPath: ["knex", "public"],
//       // connection: {
//       //   database: "ecoleta",
//       //   user: "postgres",
//       //   password: "docker",
//       // },
//       useNullAsDefault: true,
//     });
// }

export default connection;
