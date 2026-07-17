import { createContext, useContext, useState } from "react";

const WorldContext = createContext();

export function WorldProvider({ children }) {
  const [currentWorld, setCurrentWorld] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedLocker, setSelectedLocker] = useState(null);

  return (
    <WorldContext.Provider
      value={{
        currentWorld,
        setCurrentWorld,
        selectedAgent,
        setSelectedAgent,
        selectedLocker,
        setSelectedLocker,
      }}
    >
      {children}
    </WorldContext.Provider>
  );
}

export function useWorld() {
  return useContext(WorldContext);
}