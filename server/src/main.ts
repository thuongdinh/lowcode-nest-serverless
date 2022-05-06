import {createAppInstance} from "./app.factory";

const { PORT = 3000 } = process.env;

async function main() {
  const { app } = await createAppInstance();
  void app.listen(PORT);
  return app;
}

module.exports = main();
