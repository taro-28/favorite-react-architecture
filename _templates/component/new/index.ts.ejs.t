---
# containerがある時だけ作成
to: "<%= hasContainer ? `src/${path}${h.changeCase.pascal(component_name)}/index.ts` : null %>"
---

export { <%= h.changeCase.pascal(component_name) %>Container as <%= h.changeCase.pascal(component_name) %> } from './container';
