import { NextFunction, Request, Response } from "express";
import { getActivities, openWeatherApi, unsplashApi } from "../services/apis";
import FilterConditions from "../utils/filterConditions";

export default class ActivityController {
    static store = async (req: Request, res: Response) => {
        const {name} = req.query;

        let suggestions = [];
        let dataCreate:Array<Object> = [{}];

        

//uns.data.results[0].urls.regular

        try {

        //@ts-ignore
        const climate = await openWeatherApi(name);
    
        if(climate){
            const activity  = await getActivities();
        
            const { main } = climate.data.weather[0];
    
            suggestions = FilterConditions(activity.data, main);

            for (var i = 0; i < suggestions.length; i++){
                //@ts-ignore
                const el = suggestions[i].activity_title
                const uns: any = await unsplashApi(el)

                dataCreate.push({activity_title: el, photo_url: uns.data.results[0].urls.regular})
            }

            res.status(200).json({city: climate.data.name, suggestions, dataCreate})
                    
        }

        } catch (err) {
            return res.status(400).json({ error: "Activity registration failed" });
        }
    }

}