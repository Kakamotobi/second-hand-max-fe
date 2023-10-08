import { useState } from "react";

export default function useDangerAlert() {
  const [isDangerAlertOpen, setIsDangerAlertOpen] = useState(false);

  const openDangerAlert = () => {
    setIsDangerAlertOpen(true);
  };

  const closeDangerAlert = () => {
    setIsDangerAlertOpen(false);
  };

  return {
    isDangerAlertOpen,
    openDangerAlert,
    closeDangerAlert,
  };
}
