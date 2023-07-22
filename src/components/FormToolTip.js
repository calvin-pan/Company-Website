import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

function FormToolTip({title}) {
  return (
    <>
      
        <OverlayTrigger
          placement='right'
          overlay={
            <Tooltip>
              {title}
            </Tooltip>
          }
        >
        <FontAwesomeIcon icon={faQuestion} />  
        </OverlayTrigger>
     
    </>
  );
}

export default FormToolTip;