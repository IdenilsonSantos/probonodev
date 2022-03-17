import { model, Schema } from 'mongoose';

const ActivitySchema: Schema = new Schema({
  activity_title: { type: String, required: true },
  city: { type: String, required: true },
  photo_url: { type: String, required: true },
  suggested_location: { type: String, required: true },
  suggested_weather_conditions: { type: String, required: true },
  userId: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
}, { timestamps: true });

const Activity = model('Activity', ActivitySchema, 'activities');

export default Activity;