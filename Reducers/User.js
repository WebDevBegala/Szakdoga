
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
            const friends = JSON.parse(action.data);
            console.log("Friends:", friends);

            return { ...state, friends };

        case "image":
            console.log("Image: ", action.data);
            break;

        case "reset":

            return {};
        default:
            return state;
    }
}