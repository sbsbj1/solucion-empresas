import 'dotenv/config.js';
import sequelize from './config/dbconfig.js';
import express from 'express';
import User from './user/userModel.js';
import userRoute from './user/userRoute.js';
import Supplier from './supplier/supplierModel.js';
import supplierRoute from './supplier/supplierRoute.js';
import Transfer from './transfer/transferModel.js';
import transferRoute from './transfer/transferRoute.js';
import errorMiddleware from './config/errorMiddleware.js';
import cors from 'cors';
//eliminar models


const app = express();
const PORT = process.env.PORT || 9000;

//cors 
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccesStatus: 200
}

app.use(cors(corsOptions));
app.get('/api', (req, res)=> {
    res.send("Api connected successfully");
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', userRoute, supplierRoute, transferRoute);
app.use(errorMiddleware);


async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({force: false});
        console.log('Database synced successfully.');
        app.listen(PORT, ()=> {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

startServer();

