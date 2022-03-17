
export default function FilterConditions (data: [], suggested: string) {
    //@ts-ignore
    return data.filter(a => a.suggested_weather_conditions === suggested);
}
