import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios"
function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res=await axios.get("http://localhost:4001/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log("Error: ",error)
      }
    }
    getBook()
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 justify-center items-center text-center">
          <h1 className="font-bold md:text-3xl text-2xl">
            Unlock your potential with our curated book courses—
            <span className="text-pink-500">start learning today!</span>
          </h1>
          <p className="md:mt-10 mt-6 md:text-2xl text-1xl">
            "Education is the most powerful weapon which you can use to change
            the world. An investment in knowledge always pays the best interest.
            Never stop learning, because life never stops teaching."
          </p>
          <Link to="/">
          <button className="btn btn-secondary mt-6">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid md:grid-cols-4 grid-cols-1">
          {book.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
