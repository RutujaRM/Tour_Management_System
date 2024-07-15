
import User from '../models/User.js';

// 1) Create new User
export const createUser = async (req, res) => {
    const newUser = new User(req.body)
    console.log(newUser);

    try {

        const savedUser = await newUser.save();
        res.status(200).json({ success: true, message: 'Successfully Created', data: savedUser });

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'Failed to create. Try again' });

    }
}

// 2) GetAll Users
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({})
          

        res.status(200).json({ success: true, message: "Sucessfull", data: users, });

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not Found",
        });
    }
};




// 3) GetSingle User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id)

        res.status(200).json({ success: true, message: "Sucessfully Find User", data: user, });

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "User Not Found",
        });
    }
};



// 4) Update
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })

        res.status(200).json({ success: true, message: "Sucessfully Updated", data: updatedUser });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to Update",
        })
    }
};



// 5) Delete
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id)

        res.status(200).json({ success: true, message: "Sucessfully Deleted" });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to Delete",
        })
    }
};
