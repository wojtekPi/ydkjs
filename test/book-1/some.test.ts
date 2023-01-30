import {describe} from "@jest/globals";
import console = require("console");

describe("sample test describe", () => {
    test("sample test", () => {
        console.log("sample test");
        expect(true).toBe(true);
    });
});