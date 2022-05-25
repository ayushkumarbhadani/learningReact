import {Link, useParams} from "react-router-dom";
const About=()=>{
    document.title="About Page";
    return(
        <>
    <div>
        <h1>About Page - {useParams().id}</h1>
    </div>
    <Link to="/">Home</Link>
    </>
    );
}
export default About;