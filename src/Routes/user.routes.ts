import { Router } from "express";
import UserController from "../Controllers/user.controller";
import Route from "../Common/Interfaces/routes.interface";
import validationMiddleware from "../Middlewares/validation.middleware";
import { CreateUserDto } from "../Common/DTOs/User/CreateUser.dto";

class UsersRoute implements Route {
  public path = "/user";
  public router = Router();
  public userController = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      validationMiddleware(CreateUserDto, "body"),
      this.userController.createUser
    );
  }
}

export default UsersRoute;
