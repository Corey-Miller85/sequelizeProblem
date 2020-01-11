const express = require("express");
const Sequelize = require("sequelize");
const sequelize = require("./db/db");
const Message = require("./db/models/Message");
const { db } = require("./db/db");
const app = express();

(async () => {
	await db.sequelize.sync({ force: true });
	const m1 = await Message.create({
		title: "test title",
		msg: "test msg"
	});
})();
