import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import modalStyle from "../../data/modalData";
import { ModalComponentProps } from "../../types/interfaces";

const ModalComponent: React.FC<ModalComponentProps> = ({ data, open, handleClose }) => {
    return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" sx={{ fontFamily: "'Indie Flower', cursive", fontSize: "bold", color: "#F4A108" }} variant="h1" component="h2">
            Winner
          </Typography>
          <Typography id="modal-modal-description" variant="h4" sx={{ mt: 1, fontFamily: "'Briem Hand', cursive", color: "#A7C800" }}>
            { data.car }
          </Typography>
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2, color: "#64B5EB" }}>
            Time: {data.time} s
          </Typography>
        </Box>
      </Modal>
    </div>
    );
};

export default ModalComponent;
