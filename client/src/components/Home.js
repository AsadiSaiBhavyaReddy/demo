import React from 'react';
import './home.css'; // Import the CSS file for styling
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import image1 from './images/image1.png'; // Adjust the path as necessary
import image2 from './images/image2.png'; // Adjust the path as necessary

const Home = () => {
  const history = useHistory(); // Initialize useHistory

  const handleButtonClick = () => {
    // Handle the button click event, navigate to /entry
    history.push('/entry');
  };

  return (
    <div className="home-container">
      <div className="section">
        <img src={image1} alt="Woman with flowers" className="image1" />
        <div className="text-content">
          <h1>Your personalised journey</h1>
          <p>
            Everyone’s journey through healing is different. Take control and measure your anxiety with Healio’s gold-standard assessment.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="text-content">
          <h1>Trusted by experts</h1>
          <p>
            Healio uses psychological assessment scales recommended by American Psychiatric Association, NHS and National Institute for Health and Clinical Excellence.
          </p>
        </div>
        <img src={image2} alt="People sitting" className="image2" />
      </div>
      <div className="section">
        <div className="text-content">
          <h1>Start Your Journey</h1>
          <p>
            Begin your healing journey today by taking our comprehensive assessment.
          </p>
          <button onClick={handleButtonClick} className="start-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
