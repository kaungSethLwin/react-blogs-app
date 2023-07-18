import { useEffect, useState,} from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";


const Home = () => {
    const {data:blogs,isPending,showError}= useFetch ('http://localhost:8000/blogs');
    return ( 
      <div className="home">
        {showError && <div>{showError}</div>}
        {isPending && <div>Loading Please Wait....</div>}
        {blogs && <Bloglist blogs={blogs} title="All Blogs"/>}  
      </div>
     );
}


 
export default Home;