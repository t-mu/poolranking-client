export interface ReducerAction<T>
{
    type: ActionType;
    value: T;
}

export const enum ActionType {
    Test
}
