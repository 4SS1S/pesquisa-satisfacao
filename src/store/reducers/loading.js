const initialState = false;


export const loading = (state = initialState, action) => {
    console.log({
        state,action
    });


    console.log('alterado')
    switch (action.type) {
        case 'LOADING':
        return {
            ...state,
            newValue: action.newValue
        };
        default:
        return state;
    }
};