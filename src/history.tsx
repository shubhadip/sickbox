import { createMemoryHistory, createBrowserHistory } from 'history';

declare let __isBrowser__:boolean
declare let __isForGHPAGE__: boolean

const isForGHPAGE = __isForGHPAGE__;
const baseUrl = isForGHPAGE === true ? '/sickbox/' : '/';

export const browserHistory: any = __isBrowser__ ? createBrowserHistory({ basename: baseUrl }) : createMemoryHistory()
