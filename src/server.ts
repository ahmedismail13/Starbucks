import App from "./app";
import UserRoute from "./Routes/user.routes";
import 'dotenv/config';

(async () => {
  const app = new App([new UserRoute()]);
  await app.initializeApp();
  app.listen();
})();
