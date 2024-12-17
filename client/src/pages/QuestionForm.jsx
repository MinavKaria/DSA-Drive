import React, { useState } from 'react';
import  MonacoEditor  from '@monaco-editor/react';

function QuestionForm() {
  const [data, setData] = useState({
    title: '',
    description: '',
    tags: [],
    code: '',
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    const questionData = {
      title:data.title,
      description:data.description,
      tags: data.tags.split(',').map(tag => tag.trim()),
      code:data.code,
    };

    console.log('Form data:', questionData);
  };

  return (
    <div className="flex justify-center items-center flex-col w-full p-4 max-w-4xl mx-auto space-y-6  shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-white ">Add New Question</h1>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
 
        <div>
          <label className="block text-white">Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter question title"
            required
          />
        </div>


        <div>
          <label className="block text-white">Description</label>
          <textarea
            value={data.description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter question description"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-white">Tags (comma separated)</label>
          <input
            type="text"
            value={data.tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter tags (e.g. Array, Dynamic Programming)"
          />
        </div>

        <div>
          <label className="block text-white">Code</label>
          <MonacoEditor
            height="300px"
            language="cpp" 
            value={data.code}
            onChange={(value) => setCode(value)} 
            options={{
              selectOnLineNumbers: true,
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              automaticLayout: true, 
            }}
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
