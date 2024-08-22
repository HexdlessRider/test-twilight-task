import { useState, useCallback } from "react";

const useModal = () => {
  // State to track the open/close status of each modal by name
  const [modals, setModals] = useState<Record<string, boolean>>({});

  // State to track the active dynamic modal's name (string or null)
  const [activeDynamicModal, setActiveDynamicModal] = useState<Record<string, string | null>>({});

  // Function to check if a modal is open by name
  const isModalOpen = useCallback(
    (modalName: string) => {
      return !!modals[modalName];
    },
    [modals]
  );

  // Function to change the status of a modal (open/close)
  const changeModal = useCallback((modalName: string, isOpen: boolean) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: isOpen,
    }));
  }, []);

  // Function to check if a dynamic modal is open
  const isDynamicModalOpen = useCallback(
    (modalName: string) => {
      return Boolean(activeDynamicModal?.[modalName]);
    },
    [activeDynamicModal]
  );

  // Function to change the active dynamic modal (open/close)
  const changeDynamicModal = useCallback((modalName: string, newValue: string | null) => {
    setActiveDynamicModal((prevModals) => ({
      ...prevModals,
      [modalName]: newValue,
    }));
  }, []);

  // Function to get the name of the active dynamic modal
  const getActiveModalValue = useCallback(
    (modalName: string) => {
      return activeDynamicModal?.[modalName];
    },
    [activeDynamicModal]
  );

  return {
    isModalOpen,
    changeModal,
    isDynamicModalOpen,
    changeDynamicModal,
    getActiveModalValue,
  };
};

export default useModal;
