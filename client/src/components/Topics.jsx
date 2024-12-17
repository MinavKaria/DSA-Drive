import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_TITLE = gql`
  query Query($tag: [String!]) {
    getQuestionsByTag(tag: $tag) {
      title
      difficulty
      dateSolved
      _id
    }
  }
`;

function Topics({ topics }) {
  const { loading, error, data } = useQuery(GET_TITLE, {
    variables: { tag: topics },
  });

  console.log(topics);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="text-red-500 font-semibold">
        Error! {error.message}
      </div>
    );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.getQuestionsByTag.map((question) => (
          <Link
            key={question._id}
            className="p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
            to={`/question/${question._id}`}
          >
       
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              {question.title}
            </h2>

         
            <p className="text-gray-700">
              <span className="font-medium text-gray-800">Difficulty: </span>
              <span
                className={`${
                  question.difficulty === "Easy"
                    ? "text-green-500"
                    : question.difficulty === "Medium"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {question.difficulty}
              </span>
            </p>

     
            <p className="text-sm text-gray-600 mt-2">
            Solved On:{" "}
            {question.dateSolved && !isNaN(new Date(parseInt(question.dateSolved)).getTime())
              ? new Date(parseInt(question.dateSolved)).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "N/A"}
          </p>

          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topics;
