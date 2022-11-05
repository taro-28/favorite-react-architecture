---
# containerがある時だけ作成
to: "<%= hasContainer ? `src/${path}${h.changeCase.pascal(component_name)}/container.tsx` : null %>"
---

import { FC, memo } from 'react';

import { <%= h.changeCase.pascal(component_name) %>Presenter } from './presenter';
<% if(hasProps){ %>
type Props = {};

/**
 *
 */
export const <%= h.changeCase.pascal(component_name) %>Container: FC<Props> = memo(({}) => {
  console.log('logic here');
  return <<%= h.changeCase.pascal(component_name) %>Presenter />;
});
<% } else { %>
/**
 *
 */
export const <%= h.changeCase.pascal(component_name) %>Container: FC = memo(() => {
  console.log('logic here');
  return <<%= h.changeCase.pascal(component_name) %>Presenter />;
});
<% } %>
