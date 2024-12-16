import axios from 'axios';
import Question from '../schema/Questions.js';

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
