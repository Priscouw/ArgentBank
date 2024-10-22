import { login } from "/src/features/loginSlice";
import { get_infos } from "./features/userSlice";


export const postLogin = (value, setErrorMessage, dispatch, navigate) => {

    fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            setErrorMessage(true);
        }
    })
        .then((data) => {
            dispatch(login(data));
            navigate("/user");
        })
        .catch((error) => {
            console.error("Erreur lors de la connexion:", error);
        });
}


export const getInfos = (token, dispatch) => {
    fetch("http://localhost:3001/api/v1/user/profile", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log("données non valide");
            }
        })
        .then((data) => {
            dispatch(get_infos(data));
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération:", error);
        });
}