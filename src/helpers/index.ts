import crypto from 'crypto';

const SECRET = 'Alessio-API-SECRET';

export const random = () => {
    return crypto.randomBytes(128).toString('base64');
}

export const authenticate = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('base64');
}