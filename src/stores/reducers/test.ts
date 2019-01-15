const initialState = {};
export default function test(state: any = initialState, action: any) {
    const newState = { ...state };

    let { count } = state;
    if (!count) count = 0;
    
    count++;

    newState.count = count;
    
    return newState;
};
