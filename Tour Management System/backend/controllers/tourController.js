
import Tour from '../models/Tour.js';

// 1) Create new Tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)
    console.log(newTour);

    try {

        const savedTour = await newTour.save();
        res.status(200).json({ success: true, message: 'Successfully Created', data: savedTour });

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'Failed to create. Try again' });

    }
}

// 2) GetAll tours
export const getAllTour = async (req, res) => {
    // For Pagination to show limited number of items on particular page 
    const page = parseInt(req.query.page);
    console.log(page);

    try {
        const tours = await Tour.find({})
            .populate('reviews')
            .skip(page * 8)  //it will limit in single page only show 8 tours
            .limit(8);

        res.status(200).json({ success: true, message: "Sucessfull", count: tours.length, data: tours, });

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not Found",
        });
    }
};




// 3) GetSingle tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;

    try {
        const tour = await Tour.findById(id).populate('reviews');  //populate to display details 

        res.status(200).json({ success: true, message: "Sucessfully Find Tour", data: tour, });

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Tour Not Found",
        });
    }
};



// 4) Update
export const updateTour = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })

        res.status(200).json({ success: true, message: "Sucessfully Updated", data: updatedTour });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to Update",
        })
    }
};



// 5) Delete
export const deleteTour = async (req, res) => {
    const id = req.params.id;

    try {
        await Tour.findByIdAndDelete(id)

        res.status(200).json({ success: true, message: "Sucessfully Deleted" });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to Delete",
        })
    }
};





// 6) Get Tours By Search 
export const getTourBySearch = async (req, res) => {
    //Here 'i' means case sensitive

    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {

        // gte means greater than equals
        const tours = await Tour.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } })
            .populate('reviews');;

        res.status(200).json({ success: true, message: "Sucessfull", data: tours, });

    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: "Failed to Search",
        })

    }



}


// 7) Get featured tours
export const getFeaturedTours = async (req, res) => {
    try {
        const tours = await Tour.find({ featured: true })
            .populate('reviews')
            .limit(8);  //it will limit in single page only show 8 tours

        res.status(200).json({ success: true, message: "Sucessfull", data: tours, });

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not Found",
        });
    }
};



// 8) Get tours Count
export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();  //it will limit in single page only show 8 tours

        res.status(200).json({ success: true, data: tourCount, });

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Failed to Fetch",
        });
    }
};




