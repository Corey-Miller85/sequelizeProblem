const Sequelize = require("sequelize");
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "messages.db"
});

const db = {
	sequelize,
	Sequelize,
	models: {}
};

db.models.Message = require("./models/Message")(sequelize);

module.exports = db;
