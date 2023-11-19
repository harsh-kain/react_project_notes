import react from 'react'
import  ReactDOM  from 'react-dom/client';

const Header = () =>(
    <h1>Header</h1>
)
const App = () =>(
    <div>
        <Header/>
        <h1>kain</h1>
    </div>
    
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);