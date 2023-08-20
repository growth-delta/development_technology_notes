import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="container p-4">

      <ul className="nav nav-tabs">

        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTabClick('tab1')} href="#">Tab 1</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')} href="#">Tab 2</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => handleTabClick('tab3')} href="#">Tab 3</a>
        </li>

      </ul>

      <div className="tab-content">

        <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`} id="tab1">
          <h1>Tab 1 Content</h1>
        </div>
        <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`} id="tab2">
          <h1>Tab 2 Content</h1>
        </div>
        <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`} id="tab3">
          <h1>Tab 3 Content</h1>
        </div>
        
      </div>
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
