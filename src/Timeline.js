import './style.css';

function Timeline() {
    return (
        <ol className="timeline">
		  <li>
		    <p className="line">Experiences</p>
		    <span className="point"></span>
		    <p className="description">
		      Lead Developer @Geronimo
		    </p>
		    <span className="date">Today - Apr. 2016</span>
		  </li>

		  <li>
		    <span className="point"></span>
		    <p className="description">
		      Freelance
		    </p>
		    <span className="date">Apr. 2016 - Sep. 2015</span>
		  </li>

		  		  <li>
		    <p className="line">Education</p>
		    <span className="point"></span>
		    <p className="description">
		      DUT "Métiers du multimédia et de l'internet"
		    </p>
		    <span className="date">2015 - 2013</span>
		  </li>

		  		  <li>
		    <span className="point"></span>
		    <p className="description">
		      Art & Design studies
		    </p>
		    <span className="date">2013 - 2008</span>
		  </li>
		</ol>
    );
}

export default Timeline;