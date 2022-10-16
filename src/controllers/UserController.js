const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  },

  async findById(req, res) {
    const { user_id } = req.header;
    console.log('aqui');
    const users = await User.findByPk(user_id);
    console.log('terminou');

    return res.json(users);
  },
};