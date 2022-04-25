import { NextFunction, Request, Response } from "express";
import userService from "../Services/user.service";
class UserController {
    public userService = new userService();
    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userService.createUser(req.body);
            return res.status(201).json(user);
        } catch (error) {
            return next(error);
        }
    }
}

export default UserController;
