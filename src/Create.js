import { useState } from "react";
import { useHistory } from "react-router-dom";



const Create = () => {
    const [title,setTitle] =useState('');
    const [body,setbody] =useState('');
    const [author,setAuthor] =useState('Wayne');
    const [isPending,setIsPending] =    useState(false);
    const backToHome = useHistory();

    const sumitBlog = (e) =>{
        e.preventDefault();
        const blog = {title,body,author}
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
            setIsPending(false);
            backToHome.push("/")
        });
        
    }


    return (
         <div className="create">
             <h2>Add New Blog</h2>

             <form onSubmit={sumitBlog}> 
                 <label>Blog title:</label>
                 <input type="text" required
                 value={title}
                   onChange={(e) => setTitle(e.target.value) }
                 />
                 <label>Blog Body:</label>
                 <textarea required
                 value={body}
                 onChange={(e) => setbody(e.target.value) }>
                 </textarea>
                 <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value) }>
                     <option value="Wayne">Wayne</option>
                     <option value="Julian">Julian</option>
                 </select>
                 { !isPending && <button>Add Blog</button>}
                 { isPending && <button>Adding New Blog</button>}
             </form>

         </div> );
}
 
export default Create;