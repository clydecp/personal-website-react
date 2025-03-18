import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './style.css'
import content from '../../content'

type NavBarProps = {
  scrollPosition: number;
}

const NavBar = (props: NavBarProps) => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    console.log(props.scrollPosition);

    if (props.scrollPosition < 620) {
      setActiveTab('home');
    }
    else if (props.scrollPosition >= 620 && props.scrollPosition < 1310) {
      setActiveTab('portfolio');
    }
    else if (props.scrollPosition >= 1310 && props.scrollPosition < 1910) {
      setActiveTab('about');
    }
    else if (props.scrollPosition >= 1910) {
      setActiveTab('contact');
    }

  }, [props.scrollPosition]);

  return (
    <div className='nav-container'>
      <div className='nav-title'>Cameron Clyde</div>
      <div className='nav-item-container'>
        {Object.entries(content.navbar).map(([key, section]) => (
          <Link
          key={key}
            to={section.id}
            offset={-100}
            className={`nav-item ${activeTab === section.id ? 'nav-active' : ''}`}
          >
            {section.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
