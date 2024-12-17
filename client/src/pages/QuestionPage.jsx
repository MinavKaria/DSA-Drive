import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { PrismAsyncLight  as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const GET_DATA = gql`
  query Query($getQuestionId: ID!) {
    getQuestion(id: $getQuestionId) {
      description
      difficulty
      tags
      title
      dateSolved
      code
    }
  }
`;

function QuestionPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { getQuestionId: id },
  });

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10">Error! {error.message}</div>;

  const { title, description, difficulty, tags, dateSolved, code } = data.getQuestion;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">{title}</h1>

      <div className="mb-4">
        <p className="text-lg font-semibold text-black">Description:</p>
        <p className="text-gray-700">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full">
          Difficulty: {difficulty || 'N/A'}
        </span>
        <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full">
          Date Solved: {dateSolved ? new Date(parseInt(dateSolved)).toDateString() : 'N/A'}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-lg font-semibold text-black">Tags:</p>
        <div className="flex gap-2 flex-wrap">
          {tags.length > 0
            ? tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))
            : 'No tags'}
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mb-2 text-black">Code:</p>
        <SyntaxHighlighter language="cpp" style={dark} showLineNumbers>
          {code || '// No code provided'}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default QuestionPage;
