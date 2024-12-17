import React, { useEffect, useState } from 'react';
import  MonacoEditor  from '@monaco-editor/react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
const SEND_DATA = gql`
mutation AddQuestion($title: String!, $description: String!, $tags: [String], $code: String, $addedBy: String, $difficulty: String) {
  addQuestion(title: $title, description: $description, tags: $tags, code: $code, addedBy: $addedBy, difficulty: $difficulty) {
    _id
  }
}
`;

function QuestionForm() {


  const navigate  = useNavigate();
  const [data, setData] = useState({
    title: '',
    description: '',
    tags: [],
    code: '',
    addedBy:'',
    difficulty:''
    });

    const [addQuestion, { data2, loading, error }] = useMutation(SEND_DATA);

    const [password, setPassword] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();

    const questionData = {
      title:data.title,
      description:data.description,
      tags: data.tags.split(',').map(tag => tag.trim()),
      code:data.code,
      addedBy:data.addedBy,
      difficulty:data.difficulty
    };

    if(password === import.meta.env.VITE_PASSWORD) 
    {
      console.log('Password is correct');
      const data3=addQuestion({ variables: questionData });
      setData({
        title: '',
        description: '',
        tags: [],
        code: '',
        addedBy:''
      });
      setPassword('');
      data3.then(response => {
        console.log(response);
        navigate(`/question/${response.data.addQuestion._id}`);
      }).catch(error => {
        console.error("Error adding question:", error);
      });
      // navigate(`/question/${data3.addQuestion._id}`);
    }
    else
    {
      alert('Password is incorrect');
    }

    console.log('Form data:', questionData);
  };






 



  return (
    <div className="flex justify-center items-center flex-col w-full p-4 max-w-4xl mx-auto space-y-6  shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-white ">Add New Question</h1>

      <form onSubmit={handleSubmit} className="w-full space-y-4">

        <div>
          <label className="block text-white">Added By</label>
          <input
            type="text"
            value={data.addedBy}
            onChange={(e) => setData({ ...data, addedBy: e.target.value })}
            className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>
 
        <div>
          <label className="block text-white">Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter question title"
            required
          />
        </div>


        <div>
          <label className="block text-white">Description</label>
          <textarea
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter question description"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block ">Tags (comma separated)</label>
          <input
            type="text"
            value={data.tags}
            onChange={(e) => setData({ ...data, tags: e.target.value })}
            className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter tags (e.g. Array, Dynamic Programming)"
          />
        </div>

        <div>
          <label className="block ">Difficulty</label>
          <select
            value={data.difficulty}
            onChange={(e) => setData({ ...data, difficulty: e.target.value })}
            className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="block text-white">Code in cpp</label>
          <MonacoEditor
            height="300px"
            language="cpp" 
            value={data.code}
            onChange={(value) => setData({ ...data, code: value })}
            options={{
              selectOnLineNumbers: true,
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              automaticLayout: true, 
            }}
          />
        </div>

        <div>
          <label className="block ">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter the Password to add the question"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Question
          </button>
        </div>

       
      </form>
    </div>
  );
}

export default QuestionForm;
