import axiosInstance from "../../shared/jwtInterceptor";
import { ADD_POST } from "../../shared/api";

export const addPost = async (addPostDTO) => {
    await axiosInstance.post(ADD_POST, addPostDTO)
        .then(res=> {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}
