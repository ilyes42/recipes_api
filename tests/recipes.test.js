const Recipe = require("../Models/Recipe");
const { dbConnect, dbDisconnect } = require("./test-db");
const app = require("../app");
const supertest = require('supertest');
const request = supertest(app);

jest.setTimeout(20000);

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe("Testing adding and retreiving recipes", () => {
    it("should add new recipe to database", async () => {
        const response = await request.post("/api/recipes").send({
            name: "Pizza",
            ingredients: ["Tomato", "Cheese", "Pepper"],
            duration: 30
        });

        expect(response.status).toBe(201);
        expect(response.body.name).toBe("Pizza");
        expect(response.body.ingredients.length).toBe(3);
        expect(response.body.duration).toBe(30);
    });

    it("should get recipes from database", async () => {
        const response = await request.get("/api/recipes");

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].name).toBe("Pizza");
    });
});