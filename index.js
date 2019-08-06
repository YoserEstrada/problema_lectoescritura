const { app } = require("./bin/routes");
app.listen(27017, () => {
  console.log("Server on port http://localhost:27017" );
});