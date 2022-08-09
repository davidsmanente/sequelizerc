const Sequelize = require("sequelize");
const configDB = require("../config/database");
const db = new Sequelize(configDB);


const userController = {
    index: async (req, res) => {
        try {
            const users = await db.query("select * from user;", {
                type: Sequelize.QueryTypes.SELECT,
            });
            console.log("users");
        } catch (error) { }
        console.log(error);
    },
    show: async (req, res) => { },
    store: async (req, res) => { },
    update: async (req, res) => { },
    destroy: async (req, res) => { },

};

module.exports = userController;
