---
sidebar_position: 1
---

# Headings

## Markdown headings {#markdown-headings}

You can use regular Markdown headings.

```
## Level 2 title

### Level 3 title

#### Level 4 title
```

Markdown headings appear as a table-of-contents entry.

## Heading ids {#heading-ids}

Each heading has an id that can be automatically generated, or explicitly specified.

Heading ids allow you to link to a specific document heading in Markdown or JSX:

```md
[link](#heading-id)
```


### Generated ids {#generated-ids}

By default, we will generate heading ids for you, based on the heading text.

`### Hello World` will have id `hello-world`.

Generated ids have **some limits**:

- The id might not look good
- You might want to **change or translate** the text without updating the existing id

### Explicit ids {#explicit-ids}

A special Markdown syntax lets you set an **explicit heading id**:

```md
### Hello World {#my-explicit-id}
```

