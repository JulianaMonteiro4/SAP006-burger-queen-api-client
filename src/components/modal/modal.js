import React from "react";

import './modal.css'

const Modal = ({ onClose, children }) => {

    function handleOutsideClick(e) {
        if(e.target.id === 'modal-pop-up') onClose()
          
    }

    return (
        <div id="modal-pop-up"className="modal" onClick={handleOutsideClick}>
            <div className="container-modal">
                <button className="close-modal" onClick={onClose}></button>
                <div className="border-modal">
                <div className="content-modal">{children}</div>
                </div>
            </div>
        </div>
    )    
}

export default Modal;


//<Button className="btn-resumo" id="btn-resumo" type="submit" onClick={() => { setModalVisible(true) /*handlePedidos("resumo")*/}}>Resumo</Button>
//{isModalVisible && <Modal onClose={()=> setModalVisible(false)}>OI</Modal>}

// const [isModalVisible, setModalVisible] = useState(false)

   