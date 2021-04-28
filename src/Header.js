import './style.css';

function Header() {
    return (
        <div className="container">
            <div className="hero">
			<h1 className="name"><strong>Abbie</strong> Bradley</h1>
			<span className="job-title">Developer</span>
			<span className="email">abbie.bradley@gmail.com</span>

			<h2 className="lead">Development and design of web applications 
for startups and large companies</h2>
		    </div>
        </div>
  );
}

export default Header;