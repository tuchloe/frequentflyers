import express from "express";
import { getJson } from "serpapi";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());


app.get("/fetch-flights", (req, res) => {
  getJson(
    {
      engine: "google_flights",
      departure_id: "BOS", 
      arrival_id: "ORY", 
      outbound_date: "2025-01-25",
      return_date: "2025-02-07",
      currency: "USD", 
      hl: "en", 
      api_key: process.env.SERPAPI_KEY, 
    },
    (json) => {
      res.json(json); 
    }
  );
});

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
