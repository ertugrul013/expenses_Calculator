import express from "express";
import routes from "./routes/routes.js";
import { json, urlencoded } from "body-parser";

const app = express();
const port = 8081;

app.use(json());
app.use(urlencoded({ extended: true }));

routes(app);

const server = app.listen(port, () => {
    console.log("app running on http://localhost:", server.address().port);
});