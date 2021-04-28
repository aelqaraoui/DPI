import './style.css';

function Interests() {
    return (
        <div className="sections">
				<h2 className="section-title">Interests</h2>
				
				<div className="list-card">
					<div>
						<h3>Scripting languages</h3>
						<span>PHP, JS, Bash, Python</span>
					</div>
				</div>	

				<div className="list-card">
					<div>
						<h3>Hacking</h3>
						<span>Linux, Crawlers, Bots, Network</span>
					</div>
				</div>		
		</div>
    );
}

export default Interests;