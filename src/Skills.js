import './style.css';

function Skills() {
    return (
        <div className="sections">
			<h2 className="section-title">Skills</h2>

			<div className="list-card">
				<span className="exp">+ 5 years</span>
				<div>
					<h3>Object programming & frameworks</h3>
					<span>PHP, Symfony, Laravel, Silex, …</span>
				</div>
			</div>
			
			<div className="list-card">
				<span className="exp">+ 3 years</span>
				<div>
					<h3>Design integration</h3>
					<span>Style and tools, JS Frameworks</span>
				</div>
			</div>	
					
			<div className="list-card">
				<span className="exp">+ 6 years</span>
				<div>
					<h3>Linux</h3>
					<span>Scripting, Servers management and protocols, Automation</span>
				</div>
			</div>


		</div>
    );
}

export default Skills;