import { INCREMENT } from './types';
export function increment(payload: number) {
  return {
    type: INCREMENT,
    payload
  };
}
