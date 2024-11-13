import React from 'react';
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";
function Course() {
  return (
    <> 
      <div className='max-w-screen-2xl container mx-auto px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you <span className='text-pink-500'>Here! :)</span>
          </h1>
          <p className='mt-12'>
            "Explore essential readings on web development, covering both foundational and advanced concepts. Gain access to top-recommended books and resources that enrich knowledge on frontend and backend frameworks. Each book is curated to support hands-on learning, enabling students to master Full-Stack development effectively."
          </p>
         <Link to="/">
         <button className='bg-pink-500 mt-6 text-white px-2 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
          </button>
         </Link>
        </div>
        <div className='mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
