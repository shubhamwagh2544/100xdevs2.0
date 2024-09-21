import express from 'express';
import Usercontroller from "./usercontroller";

const usercontroller = Usercontroller.getInstance();

class Userroute {
    private static instance: Userroute;

    private constructor() {}

    public static getInstance() {
        if (!Userroute.instance) {
            Userroute.instance = new Userroute();
        }
        return Userroute.instance;
    }

    public getRouter() {
        const router = express.Router();
        router.post('/signup', usercontroller.signup);
        return router;
    }
}

export default Userroute;