import './style.css'
import '../PortfolioListItem'
import content from '../../content.js'
import PortfolioListItem from '../PortfolioListItem';
import PortfolioListItemModal from '../PortfolioListItemModal';
import { useState } from 'react';

const items = content.portfolio.items;

const PortfolioPage = () => {
  const [activeModal, setActiveModal] = useState(-1);

  return (
    <div className='portfolio-container' id='portfolio' >
      <pre className='title'>{content.portfolio.title}</pre>
      <div id='item-container' className='portfolio-list-container ' >
        {Object.entries(items).map(([key, item]) => (
          <PortfolioListItem
            key={key}
            id={Number(key)}
            filepath={item.thumbnail}
            title={item.title}
            description={item.description}
            setActiveModal={setActiveModal}
          />
        ))}
      </div>
      {activeModal > -1 &&  <PortfolioListItemModal id={activeModal} setActiveModal={setActiveModal}/>}
    </div>
  );
}

export default PortfolioPage;
