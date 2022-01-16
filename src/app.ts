import express from "express";
import hpp from "hpp";
import helmet from "helmet";
import compression from "compression";
import { createConnection } from 'typeorm';
import dbConnection from './Db/connection';
import Routes from "./Common/Interfaces/routes.interface";

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;
  public routes: Routes[];

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV || "development";
    this.routes = routes;
  }

  public async initializeApp() {
    this.initializeMiddlewares();
    this.initializeRoutes(this.routes);
    this.initializeErrorHandlers();
    await this.connectToDatabase();
  }

  public initializeMiddlewares() {
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  public initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/api/v1/", route.router);
    });
  }

  public initializeErrorHandlers() { }

  private async connectToDatabase() {
    try {
      const connection = await createConnection(dbConnection);
      await connection.driver.afterConnect();
      console.log('🟢 The database is connected.');
    } catch (err) {
      console.log(`🔴 Unable to connect to the database: ${err}.`);
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }
}

export default App;
