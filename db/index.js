const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db',
    logging: true, // false disables logging
  // global options
  define: {
      freezeTableName: false,
      timestamps: true,
  },
});

const db = {
    sequelize,
    Sequelize,
    models: {},
};

db.models.Movie = require('./models/movie.js')(sequelize);
db.models.Person = require('./models/person.js')(sequelize);


module.exports = db;