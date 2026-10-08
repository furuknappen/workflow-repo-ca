import { clearStorage, getUsername, saveUser } from "./storage";
import { describe, expect, it, beforeEach } from "vitest";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("Returns the name from the user object in storage", () => {
    const user = { data: { name: "Kai" } };
    saveUser(user);

    const result = getUsername();
    expect(result).toBe(user.data.name);
  });

  it("Returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBe(null);
  });
});
