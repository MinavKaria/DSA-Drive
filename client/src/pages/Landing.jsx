import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useGlobalContext } from '../provider/Context'
import SelectableButton from './../components/SelectableButton';

const GET_TAGS = gql`
query GetQuestion {
  getQuestions {
    tags
  }
}
`;

function Landing() {
  const { loading, error, data } = useQuery(GET_TAGS);

  const { selectedTags, addTag, removeTag } = useGlobalContext()

  
  console.log(data)
  
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <div className='flex justify-center items-center h-full flex-col relative '>
        <h1 className=' text-3xl font-bold'>Welcome to DSA Drive</h1>
        {loading ? <Skeleton count={5} /> : <div className='flex flex-wrap justify-center items-center'>
          {data.getQuestions.map((question, index) => {
            return (
              <div key={index} className=''>
                {question.tags.map((tag, index) => {
                  return (
                    <SelectableButton key={index} tag={tag} selected={selectedTags.includes(tag)} selectedTags={selectedTags} addTag={addTag} removeTag={removeTag} />
                  )
                })}
              </div>
            )
          })}
        </div>}
      </div>

    </>
  )
}

export default Landing