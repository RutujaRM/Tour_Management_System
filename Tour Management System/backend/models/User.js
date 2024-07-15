import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true, // Ensures no leading or trailing whitespace
        },
        email: {
            type: String,
            required: true,
           
            trim: true,
            lowercase: true, // Converts email to lowercase before saving
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validates email format
        },
        password: {
            type: String,
            required: true,
            minlength: 3, // Minimum length of the password
            trim: true,
        },
        
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);

