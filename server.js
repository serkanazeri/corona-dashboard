const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(
  "/summary",
  createProxyMiddleware({
    target: "https://api.covid19api.com",
    headers: {
      accept: "application/json",
      method: "GET",
    },
    changeOrigin: true,
    router: {
      "https://api.covid19api.com/summary": "http://localhost:3001/summary",
    },
  })
);
app.listen(3001);
