import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="project-listing">
          <div className="project-listing__header">
            <div className="project-listing__title">
              pingen.io
            </div>
            <div className="project-listing__description">
              Two factor authentication
            </div>
          </div>
          <div className="project-listing__footer">
            <div className="project-listing__seeking-title">
              Currently Seeking:
            </div>
            <div className="project-listing__seeking">
              <div className="project-listing__seeking-item">
                Management
              </div>
              <div className="project-listing__seeking-item">
                Design
              </div>
              <div className="project-listing__seeking-item">
                React
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Home;
