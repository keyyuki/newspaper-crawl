import * as express from 'express';
const nunjucks = require( 'nunjucks');
import routes from './Routes'

const App = express();

App.use(express.json({limit: "2Mb"}))
App.use(express.urlencoded({limit:"2Mb"}));

nunjucks.configure('views', {
    autoescape: true,
    express: App
});
App.set('view engine', 'html');
App.use(express.static('public'))
App.use(routes);

App.use(function (err: any, req: any, res: any, next: any) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  export default App;