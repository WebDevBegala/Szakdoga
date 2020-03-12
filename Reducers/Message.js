

export function Message(state = { messages:[] }, action) {
    switch (action.type) {
        case "newMessage":
            let messages = [...state.messages, JSON.parse(action.data)];
            return { ...state, messages };
        case "getMessages":
            let allMessages =  JSON.parse(action.data);
           
            console.log("Redcuer ",{state,messages:allMessages})
            return {...state,messages:allMessages};

        default:
            return state;
    }
}



export function other(text) {
    return {
        type: 'server/test',
        data: "Ez egy teszt"
    }
}