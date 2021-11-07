const auth = require("../modules/auth/auth.route");
const computers = require("../modules/computers/computers.route");

const initRouter = (app) => {
  app.use("/auth", auth);
  app.use("/computers", computers);
};

module.exports = { initRouter };
