const express = require('express')
const { default: mongoose } = require('mongoose')
const Hotel = require('./models/hotelModels')
const app = express()
app.use(express.json())
app.getMaxListeners('/', (req, res)=>{
    res.send("Hello Node API")

})



app.listen(4000, ()=>{
    console.log("Node API app is running on Port 4000")
})
app.get("/hotel", async(req, res)=>{
    // console.log(req.body)
    // res.send(req.body)
    try{
        const newHotels = await Hotel.find({})
        res.status(200).json(newHotels)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
app.get("/hotel/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Use the id parameter to find a single hotel by its ID
        const hotel = await Hotel.findById(id);

        if (!hotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }

        res.status(200).json(hotel);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.post("/hotel", async(req, res)=>{
    // console.log(req.body)
    // res.send(req.body)
    try{
        const newHotel = await Hotel.create(req.body)
        res.status(200).json(newHotel)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
mongoose.
connect("mongodb+srv://tinsaebirhan7:D9EubbEi5lJpDCW1@cluster0.ovqcrvw.mongodb.net/ReserveXP?retryWrites=true&w=majority")
.then(()=> {
    app.getMaxListeners('/blog', (req, res)=>{
        res.send("Hello Node API")
    
    })
    console.log("connected to mongo")
}).catch((error)=> {
    console.log(error)
})