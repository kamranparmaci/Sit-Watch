import ReactDom from "react-dom";
import {
  ModalMain,
  ShowHideModal,
  HeaderModal,
  HideModal,
  ModalH3,
  Trailer,
} from "./ModalStyles";

const Modal = ({ k, show, handleModal }) => {
  return ReactDom.createPortal(
    <ShowHideModal show={show ? "block" : "none"}>
      <ModalMain>
        <HeaderModal>
          <ModalH3>Play Trailer</ModalH3>
          <HideModal onClick={handleModal}>&times;</HideModal>
        </HeaderModal>
        <Trailer
          frameBorder="0"
          src={`https://www.youtube.com/embed/${k}`}
        ></Trailer>
      </ModalMain>
    </ShowHideModal>,
    document.getElementById("modal")
  );
};

export default Modal;
