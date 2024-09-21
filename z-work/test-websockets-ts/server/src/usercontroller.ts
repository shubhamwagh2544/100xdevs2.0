import express, {Request, Response} from 'express';

class Usercontroller {
    private static instance: Usercontroller;

    private constructor() {}

    public static getInstance() {
        if (!Usercontroller.instance) {
            Usercontroller.instance = new Usercontroller();
        }
        return Usercontroller.instance;
    }

    public signup(req: Request, res: Response) {
        return res.status(200).json({ message: 'signup' });
    }
}

export default Usercontroller;