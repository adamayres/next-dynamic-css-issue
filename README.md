# next-dynamic-css-issue

## Issue 

Components that use `next/dynamic` to load and that have a CSS module lose thier CSS when navigating to another page that contains the same dynamically loaded component.

## Steps to reproduce

1) Clone repo and run `npm install && npm run build && npm run start`
2) Open a browser and go to [http://localhost:3000](http://localhost:3000)
3) Click the link to go to the "other page"

## Expected results

TestComponent 1 and TestComponent 2 should retain their styles.

## Actaul results

TestComponent 1 and TestComponent 2 do not retain their styles.

## Notes

This issue only occurs when navigating via page links, direct access to the `index` or `other-page` load the CSS correctly.

This bug appears to have been introduced as a regression from [12843](https://github.com/vercel/next.js/pull/12843) that fixed a related issue, [#10557](https://github.com/vercel/next.js/issues/10557), where there is a flash of unstyled content when navigating to a page that contains a dynamically loaded component. I verifed that this new issue is not present in 9.5.3-canary.20, but is present on 9.5.3-canary.21 and is currently present in 9.5.3.
