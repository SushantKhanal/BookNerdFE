import { getItem, saveItem } from '../utils/localStorageService';

export const refreshTokenSetup = (res) => {
    //timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        const userData = JSON.parse(getItem('userData'));
        userData.tokenObj = newAuthRes;
        saveItem('userData', userData);
        //Setup the other timer after the first one
        setTimeout(refreshToken, refreshTiming);
    }
    //Setup first refresh token
    setTimeout(refreshToken, refreshTiming);
}
