const app = require("./app");

// const {PORT} = 4000 || process.env.PORT;
// const PORT = process.env.PORT;
const {PORT} = process.env; // This and above declaration are same
app.listen(PORT,() => {
    console.log(`Server is listening at port ${PORT}`);
})