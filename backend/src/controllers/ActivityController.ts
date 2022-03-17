import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import Activity from "../models/Activity";
import { getActivities, openWeatherApi, unsplashApi } from "../services/apis";
import FilterConditions from "../utils/filterConditions";

export default class ActivityController {
    static store = async (req: Request, res: Response) => {
        const { name } = req.query;

        //@ts-ignore
        const id = req.userId

        let suggestions = [];
        let data: Array<Object> = [];

        try {

            //@ts-ignore
            const climate = await openWeatherApi(name);

            if (climate) {
                const activity = await getActivities();

                const { main } = climate.data.weather[0];

                suggestions = FilterConditions(activity.data, main);

                for (var i = 0; i < suggestions.length; i++) {
                    //@ts-ignore
                    const { activity_title, suggested_location, suggested_weather_conditions } = suggestions[i]
                    const uns: any = await unsplashApi(activity_title)

                    data.push({
                        city: climate.data.name,
                        activity_title, suggested_location,
                        suggested_weather_conditions,
                        photo_url: uns.data.results[0].urls.regular,
                        userId: new ObjectId(id)
                    })
                }

                const activities = await Activity.create(data);

                res.status(200).json(activities)

            }

        } catch (err) {
            return res.status(400).json({ error: "Activity registration failed" });
        }
    }

    static getActivity = async (req: Request, res: Response) => {
        const { city_name } = req.query;

        let suggestions = [];
        let data: Array<Object> = [];

        try {

            //@ts-ignore
            const climate = await openWeatherApi(city_name);
            const { name } = climate.data;

            if (climate) {
                const activity = await getActivities();

                const { main } = climate.data.weather[0];

                suggestions = FilterConditions(activity.data, main);

                for (var i = 0; i < suggestions.length; i++) {
                    //@ts-ignore
                    const { activity_title, suggested_location, suggested_weather_conditions } = suggestions[i]
                    const uns: any = await unsplashApi(activity_title)

                    data.push({ 
                        city: name, 
                        activity_title, 
                        suggested_location, 
                        suggested_weather_conditions, 
                        photo_url: uns.data.results[0].urls.regular 
                    })
                }

                res.status(200).json(data)

            }

        } catch (err) {
            return res.status(400).json({ error: "Activity registration failed" });
        }
    }

    static getLastActivitiesByUser = async (req: Request, res: Response) => {

        //@ts-ignore
        const id = req.userId

        try {

            const activities = await Activity.find({ userId: id });
            return res.status(200).json(activities)

        } catch (err) {
            return res.status(400).json({ error: "Activities not found" });
        }
    }

}