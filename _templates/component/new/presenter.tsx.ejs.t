---
# containerがある時だけ作成
to: "<%= hasContainer ? `src/${path}${h.changeCase.pascal(component_name)}/presenter.tsx` : null %>"
---

import { FC, memo } from 'react';

type Props = {};

/**
 *
 */
export const <%= h.changeCase.pascal(component_name) %>Presenter: FC<Props> = memo(({}) => <></>);

