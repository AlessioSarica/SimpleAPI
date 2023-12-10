import exprss from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routers/index';

const app = exprss();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(cors({
    credentials: true
}));

app.use('/', routes());

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
})