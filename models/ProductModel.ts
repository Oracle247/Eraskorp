import { IProduct } from '@/interfaces';
import { IProductTest } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const CandidateSchema: Schema = new Schema<IProduct>({
  image: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  performantFeature: {
    type: String,
    required: true,
  },
  testResults: {
    type: Array<IProductTest>(),
    default: [],
  },
  testResultsImage: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array<Number>(),
    default: [],
  },
}, {
  timestamps: true
});


const CandidateModel = models.Candidate || model('Candidate', CandidateSchema);


export default CandidateModel