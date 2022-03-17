import axios from 'axios';

export async function getActivities() {
  const response = axios.get('https://raw.githubusercontent.com/probono-digital/DesafioTecnico/main/MOCK_DATA.json');
  return response;
}

export function openWeatherApi(city: string){
    const apiKey = '038cc0c6a4418ed93c43d8a2cdd8a016';
    const response = axios.get(`${'https://api.openweathermap.org/data/2.5/weather?q='}${city}${'&appid='}${apiKey}`)

    return response;
}