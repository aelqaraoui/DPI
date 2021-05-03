import './style.css';
import Header from './Header';
import Skills from './Skills';
import Interests from './Interests';
import Card from './Card';
import Timeline from './Timeline';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Header />

      <div className="container cards">
        <Card title="Utile" text="Facilitez le partage de votre dossier médical" />
        <Card title="Simple" text="Retrouvez en un seul endroit votre historique de santé" />
        <Card title="Sécurisé" text="Un service confidentiel dont vous contrôlez l'accès" />
        <Card title="Accessible" text="Accéder à votre dossier médical, depuis n’importe où, n’importe quand" />
      </div>


{/*
      <div className="container">
        <Skills />
        <Interests />
      </div>
*/}

      
{/*
      <div className="container">
        <Timeline />
      </div>
*/}
      <br/><br/>

    </div>
  );
}

export default App;
