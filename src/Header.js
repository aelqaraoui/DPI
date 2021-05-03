import './style.css';

function Header() {
    return (
        <div className="container">
            <div className="hero">
			<h1 className="name"><strong>IT MED</strong> MAROC</h1>
			<span className="job-title">DPI</span>

			<h2 className="lead">LE DPI, QU'EST CE QUE C'EST ?</h2>
            <p>Le Dossier Patient Informatisé (DPI) est un carnet de santé numérique qui conserve et sécurise vos informations de santé : traitements, résultats d’examens, allergies...<br/>
Il vous permet de les partager avec les professionnels de santé de votre choix, qui en ont besoin pour vous soigner.</p>
		    </div>
        </div>
  );
}

export default Header;