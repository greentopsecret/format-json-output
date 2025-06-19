# format-json-output

A simple CLI tool that filters and pretty-prints JSON lines from stdout while passing through any non-JSON lines as-is.

## Use Case

Useful for formatting mixed stdout output from processes like `npm run start:watch` where JSON lines are mixed with logs or other messages.

## Installation
```bash
npm install -g format-json-output
```

## Usage

```bash
npm run start:watch | format-json-output
```

## Behavior

- Lines containing valid JSON objects (enclosed in `{}`) are formatted using `JSON.stringify(obj, null, 2)`.
- Lines without JSON or with invalid JSON are output unchanged.

## Example

**Input:**

```
INFO Starting dev server...
{"event":"build","status":"success"}
WARN Watch mode enabled.
```

**Output:**

```
INFO Starting dev server...
{
  "event": "build",
  "status": "success"
}
WARN Watch mode enabled.
```
