
export function User(state = { searched: [], images: [] }, action) {
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

        case "getImages":
            let imagesData = JSON.parse(action.data);

            return { ...state, images: imagesData }
            break;
        case "passwordChanged":
            return { ...state, passwordChanged: action.data }
            break;
        case "scheduleSearched":
            let timeData = [];
            console.log(action.data)
            timeData.push({ fromTime: action.data[0], toTime: action.data[1] })
            for (let i = 3; i <= action.data.length; i += 2) {
                let prev = i-1;
                let next = i;
                
                console.log("Times:", action.data[prev], action.data[next])
                timeData.push({ fromTime: action.data[prev], toTime: action.data[next] })


            }
            //console.log(timeData)
            return { ...state, schedule: timeData }
        case "reset":
            return {};
        default:
            return state;
    }
}