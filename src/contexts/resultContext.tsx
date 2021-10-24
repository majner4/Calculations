import { FC, useContext, createContext, useState } from 'react';

export const ResultContext = createContext<{
  data: { correctResults: Array<number>; setCorrectResults(correctResults: Array<number>): void };
}>({
  data: {
    correctResults: [],
    setCorrectResults: () => {},
  },
});

export const ResultProvider: FC = ({ children }) => {
  const [correctResults, setCorrectResults] = useState<Array<number>>([]);

  return (
    <ResultContext.Provider
      value={{
        data: { correctResults, setCorrectResults },
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResult = () => {
  const ctx = useContext(ResultContext);

  return {
    context: ctx,
  };
};
