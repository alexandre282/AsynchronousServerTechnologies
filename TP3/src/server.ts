import express = require("express");
import { MetricsHandler, Metric } from "./metrics";

const app = express();
const port: string = process.env.PORT || '8080';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.get("/", (req: any, res: any) => {
  res.write("Hello world");
  res.send();
});

app.get("/metrics", (req: any, res: any) => {
  MetricsHandler.get((err: Error | null, result?: any) => {
    if (err) {
      throw err;
    }
    res.json(result);
  })
});

app.listen(port, (err: Error) => {
  if (err)
  {
    throw err;
  }
  console.log(`Server is listening on port ${port}`);
});