

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


export function getFriends(data) {

    return {
        type: 'server/getFriends',
        data: data
    }
}


export function passwordChange(data) {
    return {
        type: 'server/passwordChange',
        data: data
    }
}



export function uploadImage(data) {

    return {
        type: 'server/uploadImage',
        data: data
    }
}

export function getImages(data) {

    return {
        type: 'server/getImages',
        data: data
    }
}

export function searchSchedule(data) {
    return {
        type: 'server/scheduleSearch',
        data: data
    }
}

export function reset() {
    return {
        type: 'reset',
    }
}
