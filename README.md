# Report Action

This action creates a custom report.

## Inputs

### `title`

**Required** The report title. Default `Custom Report`.

### `GITHUB_TOKEN`

**Required** The GitHub token.

## Outputs

### `contents`

The contents of the report in HTML format.

## Example usage

```yaml
uses: rdlopes/report-action
with:
  title: My title
```
