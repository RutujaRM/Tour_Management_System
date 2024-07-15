import Booking from '../models/Booking.js';


// Create new Bookings
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)

    try {
        const savedBooking = await newBooking.save();

        return res.status(200).json({ success: true, message: "Your Tour is Booked !! 😍", data: savedBooking });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: 'Interbnal Server Error' });

    }

};


// Get Single Booking
export const getBooking = async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Booking.findById(id)

        return res.status(200).json({ success: true, message: "Successful", data: book, });

    } catch (err) {
        return res.status(404).json({ success: false, message: "Not Found ", });

    }
};



// Get All Booking
export const getAllBooking = async (req, res) => {
    try {
        const books = await Booking.find()

        return res.status(200).json({ success: true, message: "Successful", data: books, });

    } catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server Error ", });

    }
};