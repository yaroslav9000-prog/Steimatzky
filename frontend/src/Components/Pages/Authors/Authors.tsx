import "./Authors.css";
import axios from "axios";
function Authors(): JSX.Element {
    const authors = axios.get()
    
    return (
        <div className="Authors">
			<h1>authors</h1>
        </div>
    );
}

export default Authors;
