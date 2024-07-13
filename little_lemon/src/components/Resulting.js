import {Link,Outlet} from "react-router-dom"

function Result(props) {
    return (
        <>
            <div className="ending">
                <h1>Thank you for your reservation! {props.name}</h1>
                <p>Your booking has been confirmed.</p>
                <Link to="/">Back to Home</Link>
            </div>
            <Outlet/>
        </>
        
    );
}
export default Result;