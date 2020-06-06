import path from "path";

// module.exports = {
//   client: "sqlite3",
//   connection: {
//     filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
//   },
//   migrations: {
//     directory: path.resolve(__dirname, "src", "database", "migrations"),
//   },
//   seeds: {
//     directory: path.resolve(__dirname, "src", "database", "seeds"),
//   },
//   useNullAsDefault: true,
// };

module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  // connection:
  //   "postgres://npjtybqnzxgevs:cb38063583b8195d076da29615c3fdd3e96bdd158f3a2ed4f43b94b51e22ec01@ec2-34-193-117-204.compute-1.amazonaws.com:5432/ddjlaktsksftlc?ssl=no-verify",
  searchPath: ["knex", "public"],
  ssl: { rejectUnauthorized: false },
  // connection: {
  //   database: "ecoleta",
  //   user: "postgres",
  //   password: "docker",
  // },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds"),
  },
  useNullAsDefault: true,
};
