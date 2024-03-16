import * as core from "@actions/core";

export async function createSummary(title: string) {
  await core.summary
    .addHeading(title)
    .write({ overwrite: true });
}
