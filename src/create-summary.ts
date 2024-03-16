import * as core from "@actions/core";

export async function createSummary(title: string) {
  const summary = core.summary
    .addHeading(title);

  const contents = summary.stringify();
  await summary.write();
  return contents;
}
