const Sequelize = require('sequelize');

let db = {};

const sequelize = new Sequelize(
  'db_name', // db name
  'db_user', //db user
  'db_pass', // db pass
  {
    host: 'db_host', // db host
    port: 3306, // db port
    dialect: 'mysql',
    define: {
      freezeTableName: true,
    },
    pool: {
      max: 40,
      min: 0,
      acquire: 30000,
      idle: 2000,
    },
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    //operatorsAliases: false,
  }
);

let models = [
  require('./../models/country.js'),
  require('./../models/destinations.js'),
];

//Initialize models
models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
});

// Apply associations
Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = {
  db,
  sequelize,
};
