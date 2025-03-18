import './style.css';
import content from '../../content.js'
import { Dispatch, SetStateAction} from 'react';
import ImageGallery from '../ImageGallery';


type PortfolioListItemModalProps = {
  id: number;
  setActiveModal: Dispatch<SetStateAction<number>>;
}

const PortfolioListItemModal = (props: PortfolioListItemModalProps) => {

  const itemContent = content.portfolio.items[props.id]

  return (
    <div>
      { props.id > -1 ? 
        (
          <div className='modal-background'>
            <div className='modal-container'>
              <div className='modal-icon-container'>
                <button 
                  onClick={() => {
                    props.setActiveModal(-1); 
                    document.body.setAttribute('style', 'overflow-y: scroll;');
                  }}
                >
                  <img src={content.icons.close.filepath} alt='' className='modal-close-icon'/>
                </button>
              </div>
              {/* Modal body */}
              <div className='modal-content'>
                <h1>{itemContent.title}</h1>
                <ImageGallery images={itemContent.images}/>
                <div className='test-scroll'></div>
              </div> 
            </div>
          </div>
        ) 
        : 
        (
          <></>
        )
      }
    </div>
  );
}

export default PortfolioListItemModal;