const { app } = require('./app');

//util
const { sequelize } = require('./util/database');

sequelize.authenticate()
.then(() => console.log('database authenticate'))
.catch(error => console.log(error)); 

sequelize.sync()
.then(() => console.log('Database Synced'))
.catch(error => console.log(error))


app.listen(4000, () => {
    console.log('Express app running');

});