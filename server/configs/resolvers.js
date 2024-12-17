import axios from 'axios';
import Question from '../schema/Questions.js';
import { get } from 'mongoose';

const resolver={
    Query:{
       getQuestions:async ()=>{
              try{
                const questions=await Question.find();
                return questions;
              }
              catch(err){
                console.log(err);
              }
            },
        getQuestion:async (_,{id})=>{
            try{
                const question=await Question.findById(id);
                return question;
            }
            catch(err){
                console.log(err);
            }

        },
        getQuestionsByTag: async (_, { tag }) => {
            try {
              if(tag.length === 0) 
              {
                const questions = await Question.find();
                return questions;
              }
              const questions = await Question.find({
                tags: { $in: tag } 
              });
              return questions;
            } catch (err) {
              console.error("Error fetching questions by tags", err);
              throw new Error("Error fetching questions by tags");
            }
          }
          

    },
    Mutation:{
        addQuestion:async (_,args)=>{
            try{
                const question=new Question({
                    title:args.title,
                    description:args.description,
                    tags:args.tags,
                    code:args.code
                });
                await question.save();
                return question;
            }
            catch(err){
                console.log(err);
            }
        }
    }
}


export default resolver;
