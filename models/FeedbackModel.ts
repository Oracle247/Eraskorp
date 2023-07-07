import { IFeedback } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const FeedbackSchema: Schema = new Schema<IFeedback>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});


const FeedbackModel = models.Feedback || model('Feedback', FeedbackSchema);


export default FeedbackModel