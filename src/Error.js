import { Link } from "react-router-dom";

const Errorpages = () => {
    return ( 
        <div className="error">
            <h2>Sorry</h2>
            <p>We cannot find the page you looking for </p>
            <Link to="/">Back to the homepages...</Link>
        </div>
     );
}
 
export default Errorpages;