const express = require('express')
const { default: mongoose } = require('mongoose')


const flightRoutes = require('./routes/flight');
const spaceRoutes = require('./routes/space');
const tourRoutes = require('./routes/tour');
const carRoutes = require('./routes/car');
const boatRoutes = require('./routes/boat');
const hotelRoutes = require('./routes/hotel');
const roomRoutes = require('./routes/room');
const bookingRoutes = require('./routes/booking');
const hotelattributes = require('./routes/hotelAttributes');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json())
app.getMaxListeners('/', (req, res) => {
    res.send("Hello Node API")

})

app.use('/', flightRoutes);
app.use('/', spaceRoutes);
app.use('/', tourRoutes);
app.use('/', carRoutes);
app.use('/', boatRoutes);
app.use('/', hotelRoutes);
app.use("/", roomRoutes);
app.use("/", bookingRoutes);
app.use("/", hotelattributes);


app.listen(4000, () => {
    console.log("Node API app is running on Port 4000");
});
mongoose.
    connect("mongodb+srv://tinsaebirhan7:D9EubbEi5lJpDCW1@cluster0.ovqcrvw.mongodb.net/ReserveXP?retryWrites=true&w=majority")
    .then(() => {
        app.getMaxListeners('/blog', (req, res) => {
            res.send("Hello Node API")

        })
        console.log("connected to mongo")
    }).catch((error) => {
        console.log(error)
    })
