import "materialize-css/dist/css/materialize.min.css";
import "../shared/css/site.css";
import "../shared/css/common.css";
import "../shared/css/indentations.css";
import "../shared/css/materialize-extensions.css";
import "./App.css";

function App({children}) {
    return (
        <div className="App s-vflex">
            {children}
        </div>
    );
}

export default App;
