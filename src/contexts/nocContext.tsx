import { FC, useContext, createContext, useState } from 'react';

export const NocContext = createContext<{
  data: { noc: number; setNocData(noc: number): void };
}>({
  data: {
    noc: 0,
    setNocData: () => {},
  },
});

export const NocProvider: FC = ({ children }) => {
  const [noc, setNocData] = useState(0);

  return (
    <NocContext.Provider
      value={{
        data: { noc, setNocData },
      }}
    >
      {children}
    </NocContext.Provider>
  );
};

export const useNoc = () => {
  const ctx = useContext(NocContext);

  return {
    context: ctx,
  };
};
