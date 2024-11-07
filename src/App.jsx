import NetFlix from "./components/NetFlix";
// import './App.css'
// import './components/NetFlix.css'
import './components/Netflix.module.css';
export const App = ()=>{
  return (
    <section className="container">
    <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetFlix/>
    </section>
  );
};
