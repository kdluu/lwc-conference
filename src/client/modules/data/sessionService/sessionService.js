const URL = 'https://conference-lwc-app.herokuapp.com/api/sessions';
let sessions = [];
export const getSessions = () => fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('No response from server');
        }
        return response.json();
    })
    .then(result => {
        // console.log(result)
        sessions = result.data;
        console.log("in sessionServive: ", sessions)
        return sessions;

    });
export const getSession = sessionId => {
    return sessions.find(session => {
        return session.id === sessionId;
    });
}

