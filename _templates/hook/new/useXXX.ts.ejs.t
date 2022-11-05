---
to: src/<%= path %><%= h.changeCase.camel(hookName) %>.ts
---

/**
 *
 */
export const <%= h.changeCase.camel(hookName) %> = () => {
  // your logic
  console.log('hoge');

  return {}
};
