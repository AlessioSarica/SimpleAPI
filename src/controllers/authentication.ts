import express from 'express';
import { getUserByEmail, createUser, updateSessionToken } from '../db/users';
import { random, authenticate } from '../helpers';

export const register =async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).send("Missing email or password");
    }

    const existingUser = await getUserByEmail(email);

    if(existingUser.length > 0) {
        return res.status(400).send("User already exists");
    }

    const salt = random();
    const hashedPassword = authenticate(salt, password);

    const newUser = await createUser(email, hashedPassword, salt);

    res.status(201).json(newUser == null ? 'User added succesfuly': 'Possible error').end();
};

export const login = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).send("Missing email or password");
    }

    const existingUser = await getUserByEmail(email);

    if(existingUser.length === 0) {
        return res.status(400).send("User does not exist");
    }

    const { salt, hashPassword, id } = existingUser[0];

    const expectedHash = authenticate(salt, password);

    if(hashPassword !== expectedHash) {
        return res.status(401).send("Incorrect password");
    }

    const sessionToken = authenticate(random(), id.toString());

    updateSessionToken(email, sessionToken);

    res.cookie('sessionToken', sessionToken, {domain: 'localhost', path: '/'})

    res.status(200).send("Logged in").end();
};