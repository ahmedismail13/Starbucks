import { Router } from "express";
import UserController from "../Controllers/user.controller";
import Route from "../Common/Interfaces/routes.interface";

class UsersRoute implements Route {
    public path = "/user";
    public router = Router();
    public userController = new UserController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, this.userController.createUser);
    }
}

export default UsersRoute;
