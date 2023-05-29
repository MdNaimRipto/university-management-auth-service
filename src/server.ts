import mongoose from "mongoose";
import app from "./app";
const port = process.env.PORT || 5000

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log(`🛢 Database Connected`);
        app.listen(port, () => {
            console.log(`Server is running on https://localhost:${port}`);
        })
    }
    finally {

    }

}

main().catch(err => console.log(err));