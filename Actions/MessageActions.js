
export function sendMessage(data) {

    return {
        type: 'server/sendMessage',
        data: data
    }
}

export function getMessages(data) {

    return {
        type: 'server/getMessages',
        data: data
    }
}