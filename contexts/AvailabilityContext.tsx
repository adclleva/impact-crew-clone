// contexts/AvailabilityContext.tsx
import React, { createContext, useContext, useState } from "react";

export interface AvailabilityCheck {
  description: string;
  startDate: Date;
  endDate: Date;
  status: "pending" | "confirmed" | "cancelled";
}

interface ContextProps {
  availabilityChecks: AvailabilityCheck[];
  addAvailabilityCheck: (check: AvailabilityCheck) => void;
}

const AvailabilityContext = createContext<ContextProps | undefined>(undefined);

export const AvailabilityProvider: React.FC = ({ children }) => {
  const [availabilityChecks, setAvailabilityChecks] = useState<AvailabilityCheck[]>([]);

  const addAvailabilityCheck = (check: AvailabilityCheck) => {
    setAvailabilityChecks([...availabilityChecks, check]);
  };

  return (
    <AvailabilityContext.Provider value={{ availabilityChecks, addAvailabilityCheck }}>
      {children}
    </AvailabilityContext.Provider>
  );
};

export const useAvailability = () => {
  const context = useContext(AvailabilityContext);
  if (!context) {
    throw new Error("useAvailability must be used within an AvailabilityProvider");
  }
  return context;
};
