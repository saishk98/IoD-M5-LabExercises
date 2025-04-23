const request = require("supertest");
const app = require("../index"); // Ensure index.js exports 'app'

describe("Calculator API Tests", () => {
  test("Addition Route", async () => {
    const response = await request(app).get("/calculator/add?num1=10&num2=5");
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(15);
  });

  test("Subtraction Route", async () => {
    const response = await request(app).get(
      "/calculator/subtract?num1=10&num2=5"
    );
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(5);
  });

  test("Multiplication Route", async () => {
    const response = await request(app).get(
      "/calculator/multiply?num1=10&num2=5"
    );
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(50);
  });

  test("Division Route", async () => {
    const response = await request(app).get(
      "/calculator/divide?num1=10&num2=5"
    );
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(2);
  });

  test("Division by Zero", async () => {
    const response = await request(app).get(
      "/calculator/divide?num1=10&num2=0"
    );
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(
      "Invalid numbers provided or division by zero"
    );
  });
});
