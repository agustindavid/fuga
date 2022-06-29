import { writable } from "svelte/store";
import axios from "axios";

export const activities = writable([]);
export const distanceTotal = writable([]);
const authLink='https://www.strava.com/oauth/token';


export const getActivities = async (token) => {
    const response = await axios({
        url : `https://www.strava.com/api/v3/activities?access_token=${token}`,
        method: 'GET',
    });
    
    const data = await response.data;
    console.log(data);

    let initialValue = 0;
    const totalD = data.reduce(function(total, currentValue){
        return total + currentValue.distance; }, initialValue
    );

    const longestRide = data.reduce(function(prev, current){
       return (prev.distance > current.distance) ? prev : current;
    });

    console.log(longestRide);

    //console.log((totalD/1000).toFixed(2));

    distanceTotal.set((totalD/1000).toFixed(2));

    activities.set(data);

}

async function getToken() {

    const params = JSON.stringify({
        client_id: '7454',
        client_secret: '00682183b741db7d8fc68747599610dc62316db3',
        refresh_token: 'd8b4ce27aad1932c173ac7d67f4f284997e1de56',
        grant_type: 'refresh_token',
    });

    const token = await axios.post(authLink, params, {
        headers: {
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json',
        },
    })
    
    console.log(await token.data);

    getActivities(token.data.access_token);
}


getToken();
//getActivities();