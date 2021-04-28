import './style.css';
import Header from './Header';
import Skills from './Skills';
import Interests from './Interests';
import Card from './Card';
import Timeline from './Timeline';

function App() {
  return (
    <div className="App">

      <Header />

      <div className="container">
        <Skills />
        <Interests />
      </div>


      <div className="container cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>


      <div className="container">
        <Timeline />
      </div>

      <br/><br/>

    </div>
  );
}

export default App;
