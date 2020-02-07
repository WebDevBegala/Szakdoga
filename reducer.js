import NavigationService from "./NavigationService";

export function User(state = { searched: [] }, action) {
    switch (action.type) {
        case 'onLogin':
            let data
            try {
                data = JSON.parse(action.data);
            } catch (error) {
                data = 0;
            }
            return Object.assign({}, state, { onLogined: data });
        case 'registered':
            return Object.assign(state, { registered: action.data })
        case 'searched':
            let sData = JSON.parse(action.data)
            console.log("Reducer: ", sData)
            return { ...state, searched: sData }
        case "friendRequest":
            console.log(action.data);
            
            const friends = JSON.parse(action.data);

            return {...state,friends};
        default:
            return state;
    }
}

export function Message(state = { messages: [] }, action) {
    switch (action.type) {
        case "newMessage":
            const messages = [...state.messages, action.data];
            return { ...state, messages };

        default:
            return state;
    }
}



export function login(loginData) {
    return {
        type: 'server/login',
        data: loginData
    }
}

export function registration(data) {
    return {
        type: 'server/registration',
        data: data
    }
}

export function sendMessage(data) {

    return {
        type: 'server/sendMessage',
        data: data
    }
}


export function searchUser(data) {

    return {
        type: 'server/searchUser',
        data: data
    }
}

export function friendRequest(data) {

    return {
        type: 'server/friendRequest',
        data: data
    }
}

export function other(text) {
    return {
        type: 'server/test',
        data: "Ez egy teszt"
    }
}