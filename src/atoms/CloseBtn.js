import { IoIosCloseCircleOutline } from 'react-icons/io'


function CloseBtn({ onClick }) {
    return (
      <button onClick={onClick} className="close">
        <IoIosCloseCircleOutline/>
      </button>
    )
  }

export default CloseBtn;