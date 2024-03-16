import { createSummary } from "./create-summary";
import { SUMMARY_ENV_VAR } from "@actions/core/lib/summary";
import * as path from "path";
import * as fs from "fs";

const originalEnv = process.env;

afterEach(() => {
  process.env = originalEnv;
});

describe("Create Summary", () => {
  it("creates a summary", async () => {
    const summaryPath = path.join(__dirname, "__output__", "summary.html");
    fs.writeFileSync(summaryPath, "");
    process.env[SUMMARY_ENV_VAR] = summaryPath;
    await createSummary("Test Summary");
    const summaryContents = fs.readFileSync(summaryPath).toString();
    expect(summaryContents).toMatch('<h1>Test Summary</h1>');
  });
});
