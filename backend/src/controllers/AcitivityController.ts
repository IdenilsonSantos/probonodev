import { NextFunction, Request, Response } from "express";
import { getActivities, openWeatherApi } from "../services/apis";
import FilterConditions from "../utils/filterConditions";

export default class ActivityController {
    static store = async (req: Request, res: Response) => {
        const {name} = req.query;

        let suggestions = [];

        try {

        //@ts-ignore
        const climate = await openWeatherApi(name);
    
        if(climate){
            const activity  = await getActivities();
        
            const { main } = climate.data.weather[0];

            console.log(main)
    
            switch (main) {
                case 'Clouds':
                    suggestions = FilterConditions(activity.data, main)
                    res.status(200).json({city: climate.data.name, suggestions})
                    break;

                    case 'Rain':
                    suggestions = FilterConditions(activity.data, main)
                    res.status(200).json({city: climate.data.name, suggestions})
                    break;

                    case 'Storm':
                    suggestions = FilterConditions(activity.data, main)
                    res.status(200).json({city: climate.data.name, suggestions})
                    break;

                    case 'Sun':
                    suggestions = FilterConditions(activity.data, main)
                    res.status(200).json({city: climate.data.name, suggestions})
                    break;

                    case 'Snow':
                    suggestions = FilterConditions(activity.data, main)
                    res.status(200).json({city: climate.data.name, suggestions})
                    break;

                    case 'Clear':
                    suggestions = FilterConditions(activity.data, main)
                    res.status(200).json({city: climate.data.name, suggestions})
                    break;
            
                default:
                    break;
            }
        }

        } catch (err) {
            return res.status(400).json({ error: "Activity registration failed" });
        }
    }
}