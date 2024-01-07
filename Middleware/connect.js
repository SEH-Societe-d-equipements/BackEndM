const mongoose = require("mongoose");
const Admin = require("../Model/admin");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/SEH", {
      
        });
        console.log("Database connected :=====> BACKEND");
        const adminCount = await Admin.countDocuments({});
        
        if (adminCount === 0) {
            const newAdmin = new Admin({
                username: 'test1',
                password: 'test1',
                role:'admin'
            });
            const newAdmin2 = new Admin({
                username: 'test2',
                password: 'test2',
                role:'commerciale'
            });
            await newAdmin.save();
            await newAdmin2.save();
            console.log('New admin added.');
        } else {
            console.log('Admin already exists. No new admin added.');
        }
    } catch (err) {
        console.log(`Error in connecting to database BACKEND : ${err}`);
    }
};

connectDB();

module.exports.mongoose = mongoose;
