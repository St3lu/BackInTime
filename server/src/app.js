const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${ port }`));