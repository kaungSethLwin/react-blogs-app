import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog,isPending,showError} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const deleteBlog =() => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:"DELETE",
        }).then(()=>{
            history.push("/")
        })
    }


    return (
        <div className="blog-details">
           {isPending && <div>Loading...</div>}
           {showError && <div>{showError}</div>}
           {blog && (
               <article>
                   <h2>{blog.title}</h2>
                   <p>Writtern By {blog.author}</p>
                   <div>{blog.body}</div>
                   <button onClick={deleteBlog}>delete</button>
               </article>
           )}
        </div>
      );
}
 
export default BlogDetails;