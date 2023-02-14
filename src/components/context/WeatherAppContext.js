import { createContext, useReducer} from "react";
import weatherAppReducer from "./WeatherAppReducer";

const WeatherappContext = createContext()

export const WeatherappProvider = ({children})=>{
    const initialState = {
        loading: false,
    }


    const [state, dispatch] = useReducer(weatherAppReducer, initialState)

    const setLoading = () => dispatch({type:'SET_LOADING'})

    const searchCity = async (cityName) => {
        setLoading()

        const params = new URLSearchParams({
            q: cityName,
        })

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c6e096b31bd5198b24fbc915308b63f6`)
        const data = await response.json()

        dispatch({
            type: 'GET_CITY', 
            payload: cityName
        })

    }  

    return <WeatherappContext.Provider value={{
        loading: state.loading,
        searchCity,
    }}>
        {children}
    </WeatherappContext.Provider>
}






