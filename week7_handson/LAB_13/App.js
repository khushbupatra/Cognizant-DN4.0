import { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books, blogs, courses } from './data';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {showBooks && <BookDetails books={books} />}
        {showBlogs ? <BlogDetails blogs={blogs} /> : null}
        {showCourses && <CourseDetails courses={courses} />}
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => setShowBooks(!showBooks)}>Toggle Books</button>
        <button onClick={() => setShowBlogs(!showBlogs)}>Toggle Blogs</button>
        <button onClick={() => setShowCourses(!showCourses)}>Toggle Courses</button>
      </div>
    </div>
  );
}

export default App;
