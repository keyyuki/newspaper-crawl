import * as express from 'express';
import {addsiteAction, addsitePostAction, validateSite} from './routes/add-site';
import {listsiteAction} from './routes/list-site'
import {asyncMiddleware} from '../etc/AsyncMiddleware'

const Route = express.Router();
Route.get('/add-site', addsiteAction);
Route.post('/add-site', validateSite, asyncMiddleware(addsitePostAction))
Route.get('/list-site', asyncMiddleware(listsiteAction))
Route.get('/', (req: any, res: any) => {
    res.status(404).send("page not found")
});
export default Route;