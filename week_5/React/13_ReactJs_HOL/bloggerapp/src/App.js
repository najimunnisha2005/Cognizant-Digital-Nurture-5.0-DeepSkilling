import React from "react";
import "./App.css";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {

  const books = [
    { id: 1, bname: "Master React", price: 670 },
    { id: 2, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 3, bname: "Mongo Essentials", price: 450 },
  ];

  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      description: "Welcome to learning React!"
    },
    {
      id: 2,
      title: "Installation",
      author: "Schewzdenier",
      description: "You can install React from npm."
    }
  ];

  const courses = [
    {
      id: 1,
      cname: "Angular",
      date: "4/5/2021"
    },
    {
      id: 2,
      cname: "React",
      date: "6/3/2021"
    }
  ];

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="container">

      {showBooks && (
        <div className="box">
          <h1>Book Details</h1>
          <BookDetails books={books} />
        </div>
      )}

      {showBlogs ? (
        <div className="box">
          <h1>Blog Details</h1>
          <BlogDetails blogs={blogs} />
        </div>
      ) : null}

      {showCourses ? (
        <div className="box">
          <h1>Course Details</h1>
          <CourseDetails courses={courses} />
        </div>
      ) : (
        <h2>No Courses Available</h2>
      )}

    </div>
  );
}

export default App;