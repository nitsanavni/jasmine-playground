import { text } from "../src/lib";

describe("the source", () => {
    it("should pass", () => {
        expect(text).toEqual(jasmine.stringMatching(/hello/i));
    });
});
