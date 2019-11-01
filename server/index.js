require ('controller')
require ('package.json')
require ('package-lock.json')
const massive = require ('massive')
require ('dotenv').config()

const app = express();

const {SERVER_PORT, CONNECTING_STRING} = process.env;

massive(CONNECTING_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
})
.catch(err => console.log(err));

app.use(express.json());

app.post('/apiproducts', products.create);
app.get('/api/product', products.getAll);
app.get('/api/products', products.getOne);
app.put('/api/products/:id', products.delete);

app.listen(SERVER_PORT, () => {
    Console.log(`Server listening on port ${SERVER_PORT}.`);
});