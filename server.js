import express from "express";
import { getJson } from "serpapi";
import cors from 'cors';

const app = express();
app.use(cors());

app.get("/fetch-flights", (req, res) => {
  getJson(
    {
      engine: "google_flights",
      departure_id: "BOS", 
      arrival_id: "ORY", 
      outbound_date: "2025-01-25",
      return_date: "2025-02-08",
      currency: "USD", 
      hl: "en", 
      api_key: "149afc64eb30e1292e4bb608ecb0e580cd94d0431f77586e4010a945ece079aa", 
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
