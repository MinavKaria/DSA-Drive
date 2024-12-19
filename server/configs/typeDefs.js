const typeDefs = `
 
  type Question {
    _id: ID!
    title: String!
    description: String!
    tags: [String]
    code: String
    dateSolved: String
    difficulty: String
    addedBy: String,
    link: String

  }

  type Query {
    getQuestions: [Question]
    getQuestion(id: ID!): Question
    getQuestionsByTag(tag: [String!]): [Question]
  }

  type Mutation {
    addQuestion(title: String!, description: String!, tags: [String], code: String,addedBy: String, difficulty:String, link:String): Question
  }
`;

export default typeDefs;