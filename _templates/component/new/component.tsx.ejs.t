---
# containerがない時だけ作成
to: "<%= hasContainer ? null : `src/${path}${h.changeCase.pascal(component_name)}.tsx` %>"
---

import { FC, memo } from 'react';

<% if(hasProps){ %>
type Props = {};

/**
 *
 */
export const <%= h.changeCase.pascal(component_name) %>: FC<Props> = memo(({}) => <></>);
<% } else { %>
/**
 *
 */
export const <%= h.changeCase.pascal(component_name) %>: FC = memo(() => <></>);
<% } %>

