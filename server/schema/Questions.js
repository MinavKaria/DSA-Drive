import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  tags: [{ type: String }],
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
    code: { type: String },
    dateSolved: { type: Date, default: Date.now },
    id: { type: String  }
});

const Question = mongoose.model('Question', QuestionSchema);

export default Question;
