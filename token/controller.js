
module.exports = {
  getCurrentUser: function(req, res) {
    const currentUser = { userId: req.user, realm: req.realm };
    res.json(currentUser);
  }
};
