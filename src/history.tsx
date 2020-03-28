import { createBrowserHistory } from 'history';

const isForGHPAGE = __isForGHPAGE__;
const baseUrl = isForGHPAGE === 'gh_page' ? '/sickbox/' : '/';

export const browserHistory: any = createBrowserHistory({ basename: baseUrl });
