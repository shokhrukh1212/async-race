import { useState, useContext, useEffect } from "react";
import { CarContext } from "../../context/CarContext";
import { ModalData, WinnerCarType } from "../../types/interfaces";
import ModalComponent from "../Modal.tsx";

const WinnerModal = () => {
    const [modalData, setModalData] = useState<ModalData | null>(null);
    const { winners, setWinners } = useContext(CarContext);
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    const newWinners = winners.map((w: WinnerCarType) => {
        return {
            ...w,
            isVisible: false,
        };
    });
    setWinners(newWinners);
    setOpen(false);
  };

  useEffect(() => {
    const winner = winners.find((w: WinnerCarType) => w.isVisible === true);
    if (winner) {
        setModalData({ car: winner.name, time: winner.time });
        setOpen(true);
    } else {
        setModalData(null);
        setOpen(false);
    }
  }, [winners]);

  if (!modalData) return null;
  return (
    <ModalComponent data={modalData} open={open} handleClose={handleClose} />
  );
};

export default WinnerModal;
