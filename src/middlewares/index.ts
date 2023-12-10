import express from 'express';
import { merge } from 'lodash';
import { getUserBySessionToken } from '../db/users';

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { sessionToken } = req.cookies;

    if (!sessionToken) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    const user = await getUserBySessionToken(sessionToken);

    if (user.length === 0) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    merge(req, { user })
    
    next();
}

export type RequestWithUser = express.Request & { user: [
    {
        id: string,
        email: string,
        hashPassword: string,
        salt: string,
        sessionToken: string
    }
]};