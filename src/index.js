import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { useParams, HashRouter, Routes, Route, Link} from 'react-router-dom';

  const Post = (props)=> {
  const posts = props.posts;
  const id = useParams().id;
  const post = posts.find(post => post.id === id);
  if(!posts){
    return null;
  }
  return (
    <div>
        Show Post Detail
    </div>
    );
  }

const Posts = (props) => {
    const posts = props.posts;
    return (
      <div>
        <h1>Posts</h1>
        <ul>
        {
          posts.map(post => {
           return (
            <li key={post._id}>
            <Link to={'/posts/$(post._id)'}> {post.title}</Link>
             </li>
            ); 
            })
           }
       </ul>
      </div>
      );
      }


const App = ()=> {
  const [posts, setPosts] = useState([]);


  useEffect(()=> {
    fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/posts')
    .then(response => response.json())
    .then(json => setPosts(json.data.posts))
    //console.log(json)
  }, [])
 
  return (
    <div>
      <h1>Stranger Things</h1>
      <nav>
        <Link to ='/'>Home</Link>
        <Link to ='/posts'>Posts ({posts.length})</Link>
      </nav>
      <Routes>
       
        <Route path = '/posts' element = {
          <Posts posts = {posts}/>
        } />
        <Route path = '/posts/:id' element = {
          <Post posts = {posts}/>
        } />
         <Route path ='/' element = {<div>Home</div>}/> 
      </Routes> 
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);


