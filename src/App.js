import { Component } from "react";
import Modal from "./components/Modal";
// import Clock from './components/Clock'
import SignupForm from "./components/SignupForm";

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <div className="modalWindow">
          <div className="backdrop">
            <button type="button" onClick={this.toggleModal}>
              Open
            </button>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </div>
        </div>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hi!!!!</h1>
            <p>Change content</p>
          </Modal>
        )}
        {/* <Clock /> */}
        <SignupForm />
      </>
    );
  }
}

export default App;
