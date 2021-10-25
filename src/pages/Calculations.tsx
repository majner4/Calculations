import { useCallback, useMemo, VFC } from 'react';
import { Grid } from '@mui/material';
import { ExampleBox } from '../components';
import { useNoc, useResult } from '../contexts';
import { IExample } from '../interfaces';

export const Calculations:VFC = () => {
  const nocStore = useNoc().context.data;
  const resultsStore = useResult().context.data;

  const numberOfExamples = nocStore.noc;
  const correctExamples = resultsStore.correctResults.length;

  const generateRandomNumber = useCallback((max: number) => {
    return Math.floor(Math.random() * max) + 1;
  },[])

  const calculateExample = useCallback((n1: number, n2: number, index: number) => {
    let res: number = 0;
      switch (index){
        case 0: res=n1+n2; break;
        case 1: res=n1-n2; break;
        case 2: res=n1*n2; break;
      }
    return res;
  }, [])

  const generateExamplesArray = useCallback(() => {
    let list:Array<IExample> = [];
    let ops = ['+','-','*'];

    for (let i = 1; i <= numberOfExamples; i++) {
      const opIndex = Math.floor(Math.random()*ops.length); 
      const operator = ops[opIndex];
      const negativeOperator = operator === '-';

      const number1 = generateRandomNumber(10);
      const maxRenderValue = negativeOperator ? number1 : 10;
      const number2= generateRandomNumber(maxRenderValue);
      
      const result = calculateExample(number1, number2, opIndex);

      list.push({number1, number2, operator, result});
    }
    return list;
  },[calculateExample, generateRandomNumber, numberOfExamples])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const listExamples = useMemo(() => generateExamplesArray(), []);

  return (
    <div>
      <Grid container>
        {listExamples.map((example, index) => {
          return <ExampleBox example={example} index={index} key={index} />
        })}
      </Grid>
      <div>Finished: {correctExamples}/{numberOfExamples}</div>
    </div>
  );
}

