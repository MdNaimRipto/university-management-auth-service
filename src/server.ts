import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function main() {
    try {
        await mongoose.connect(`${config.database_url}`);
        console.log(`🛢 Database Connected`);
        app.listen(config.port, () => {
            console.log(`Server is running on http://localhost:${config.port}`);
        })
    }
    finally {

    }

}

main().catch(err => console.log(err));