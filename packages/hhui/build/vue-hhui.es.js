const installs = [];
var vueHhui = {
  version: "1.0.8",
  install(app) {
    installs.forEach((p) => app.use(p));
  }
};
export { vueHhui as default };
