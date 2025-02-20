import request from "supertest";
import { app } from "../src/index"; // Ensure index.ts exports `app`

describe("API Tests", () => {
  it("should return server status", async () => {
    const res = await request(app).get("/api/status");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", "dope-shi server is live!");
  });
});
