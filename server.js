const express = require('express')
const sequelize = require('./config/connection')
const hbs = exphbs.create({ helpers });
const exphbs = require('express-handlebars');
const routes = require('.controllers')
const path = require('path');
const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const session = require('express-session');
const app = express();
const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: 36000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
const PORT = process.env.PORT || 3001;




app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

