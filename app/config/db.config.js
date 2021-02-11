module.exports = {
    HOST: "localhost",
    USER: "tisdalefry",
    PASSWORD: null,
    DB: "thursday",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };