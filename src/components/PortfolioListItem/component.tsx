import './style.css';
import content from '../../content.js'
import { Dispatch, SetStateAction, useState} from 'react';

type PortfolioListItemProps = {
  id: number;
  filepath?: string;
  title?: string;
  description?: string;
  setActiveModal: Dispatch<SetStateAction<number>> 
}

const PortfolioListItem = (props: PortfolioListItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className='portfolio-item-container'>
      <div>
        <div className='portfolio-item-image-container'>
          <img className={`portfolio-img ${isHovering ? '' : 'filter'}`} src={props.filepath} alt=''/>
        </div>
        <div className='portfolio-item-title'>{props.title}</div>
        <div className='portfolio-item-description'>{props.description}</div>
      </div>
      <div className='portfolio-icon-container'>
        <button onClick={() => {props.setActiveModal(props.id); document.body.setAttribute('style', 'overflow: hidden;');}}>
          <img 
            className='expand-icon' 
            src={content.icons.expand.filepath} 
            alt='expand' 
            onMouseEnter={() => setIsHovering(true)} 
            onMouseLeave={() => setIsHovering(false)} 
          />
        </button>
      </div>
    </div>
  );
}

export default PortfolioListItem;