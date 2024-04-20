const express = require('express');
import { Request, Response } from "express";
import {schema} from "@repo/common/config"    // works with tsup and esbuild [ not with tsc ]
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello from Node.js!',
  });
});

console.log(schema)

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});