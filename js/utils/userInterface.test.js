import { isActivePath } from "./userInterface";
import { describe, it, expect } from "vitest";

describe("isActivePath", () => {
  it("Returns true when current path matches href exactly", () => {
    const href = "/";
    const currentPath = "/";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it("Returns true for root path ('/') when path is '/' or '/index.html'", () => {
    const rootPath = "/";
    const result1 = isActivePath(rootPath, "/index.html");
    const result2 = isActivePath(rootPath, "/");
    expect(result2).toBe(true);
    expect(result1).toBe(true);
  });

  it("Returns true when current path includes the href", () => {
    const currentPath = "/info/cake.html";
    const href = "/info";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it("Returns false when paths don't match", () => {
    const badPath = "/cake.html";
    const href = "/index.html";
    const result = isActivePath(href, badPath);
    expect(result).toBe(false);
  });
});

// Returns true when current path matches href exactly
// Returns true for root path ("/") when path is "/" or "/index.html"
// Returns true when current path includes the href
// Returns false when paths don't match
