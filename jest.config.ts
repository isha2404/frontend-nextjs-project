// jest.config.js
/** @type {import('jest').Config} */
import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    // Handle CSS imports (CSS modules)
    "^.+\\.module\\.(css|scss)$": "identity-obj-proxy",

    // Handle CSS imports (plain CSS files)
    "^.+\\.(css|scss)$": "identity-obj-proxy",

    // Handle image imports
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup file for additional configurations
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // Ignore these paths for testing
  collectCoverage: true, // Enable test coverage reports
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Collect coverage from these file types
    "!src/**/*.d.ts",
    "!src/**/index.ts", // Exclude barrel files
  ],
};

module.exports = config;
