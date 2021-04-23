import { http, io } from "./http";
import "./websocket/client";

const port = 3000;

// app.listen(port, () => console.log(`Server is running on port: ${port}`))
http.listen(port, () => console.log(`Server is running on port: ${port}`))