import axiosInstance from "../../../shared/jwtInterceptor";
import { REGISTER_USER } from "../../../shared/api";

export const registerUser = async () => {
    await axiosInstance.get(REGISTER_USER)
        .then(res=> {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}
