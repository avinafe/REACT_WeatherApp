const location = "Madrid,es";
const api_key = "4cc40e13b0679db74715cd92264c139b";
const url_base_weather = "http://api.openweathermap.org/data/2.5/";

export const api_weather = `${ url_base_weather }weather?q=${ location }&appid=${ api_key }`;