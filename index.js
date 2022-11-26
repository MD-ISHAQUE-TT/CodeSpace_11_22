const app = require("./app");
require('dotenv').config()
// const {PORT} = 4000 || process.env.PORT;
const {PORT} = process.env.PORT;
app.listen(PORT,() => {
    console.log(`Server is listening at port ${PORT}`);
})