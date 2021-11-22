const auth = require("../modules/auth/auth.route");
const computers = require("../modules/computers/computers.route");
const soft = require("../modules/soft/soft.route");

const initRouter = (app) => {
  app.use("/auth", auth);
  app.use("/computers", computers);
  app.use("/soft", soft);
};

module.exports = { initRouter };
