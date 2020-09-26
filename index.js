let express = require('express')
let cors = require('cors')
let app = express();

var port = process.env.PORT || 8080;

let apiRoutes = require("./api-routes")

app.use(cors())

app.use('/api', apiRoutes)

app.listen(port, function () {
     console.log("Runnin API on port " + port);
});