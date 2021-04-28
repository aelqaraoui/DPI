import './style.css';

function Card() {
    return (
        <div className="card">
			<div className="skill-level">
				<span>+</span>
				<h2>60</h2>
			</div>

			<div className="skill-meta">
				<h3>Projects</h3>
				<span>Adapting and creating solutions for customer's needs</span>
			</div>
		</div>
    );
}

export default Card;