import { useHttp } from "../hooks/http.hook";

const useWeatherServices = () => {
    // API  CALLS
    // http://api.weatherapi.com/v1/forecast.json?key=8e5f9c7c74674207b8813736231401&q=London&days=7&aqi=no&alerts=no
    //http://api.weatherapi.com/v1/search.json?key=8e5f9c7c74674207b8813736231401&q=Paris

    const _apiBase: string = 'http://api.weatherapi.com/v1/current.json?';
    const _apiKey: string = 'key=8e5f9c7c74674207b8813736231401';

    const _daysOffset: string = '&days=7';
    const _apiParams: string = '&aqi=no&alerts=no';
}