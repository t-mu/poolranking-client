import { Store } from '../models/store';
import { ReducerAction } from './actions';

export function baseReducer(state: Store = {}, action: ReducerAction<any>): Store
{
    // return stuff based on action
    return state;
}
