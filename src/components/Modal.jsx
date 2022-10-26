import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal__root');

class Modal extends Component {
handleKeyDown = event => {
            if (event.code === 'Escape') {
                console.log('click Escape')
                this.props.onClose()
            }
        }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
}

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleBackDropClick = (event) => {
        if (event.currentTarget === event.target) {
    this.props.onClose()
}
    }
    
    render() {
        return createPortal
        (<div className="backdrop--window">
                <div className='modal__window'>
                    {this.props.children}
        </div>
    </div>, modalRoot)
}
}
export default Modal