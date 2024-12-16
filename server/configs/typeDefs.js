const typeDefs = `
 
  type Question {
    _id: ID!
    title: String!
    description: String!
    tags: [String]
    code: String
    dateSolved: String
  }

  type Query {
    getQuestions: [Question]
    getQuestion(id: ID!): Question
  }

  type Mutation {
    addQuestion(title: String!, description: String!, tags: [String], code: String): Question
  }
`;

export default typeDefs;