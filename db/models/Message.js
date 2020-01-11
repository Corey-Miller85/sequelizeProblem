const Sequelize = require("sequelize");

module.exports = sequelize => {
	class Message extends Sequelize.Model {}
	Message.init(
		{
			title: Sequelize.STRING,
			msg: Sequelize.STRING
		},
		{ sequelize }
	);
	return Message;
};
