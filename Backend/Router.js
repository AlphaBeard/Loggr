// const RESPONSE_MSG = {
//   isLoggedIn: false,
//   username: null,
//   sucess: false,
// msg
// };

class Router {
  constructor(app, db) {
    this.login(app, db);
    this.logout(app, db);
    this.isLoggedIn(app, db);
  }
  login(app, db) {
    app.post("/api/login", (req, res) => {
      const username = req.body.username.toLowerCase();
      const password = req.body.password;

      if (username.length > 12 || password.length > 12) {
        res.json({ success: false, msg: "Username or Password error!" });
      }
      let user = null;
      db.forEach((element) => {
        if (element.username === username) user = element;
      });
      if (user && user.password === password) {
        res.json({ success: true, username: req.body.username });
      }else{
        res.json({ success: false, msg: "No user or invalid password!" });
      }
    });
  }
  logout() {}
  isLoggedIn() {}
}

module.exports = Router;
