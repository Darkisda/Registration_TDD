module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
    useNullAsDefault: true,
  },
};
