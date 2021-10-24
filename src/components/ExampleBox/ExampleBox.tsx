import { useState, VFC } from 'react';
import { Grid, Box, TextField } from '@mui/material';
import { IExample } from '../../interfaces';
import { useResult } from '../../contexts';

interface IExampleBoxProps {
  example: IExample,
  index: number
}

export const ExampleBox:VFC<IExampleBoxProps> = (props) => {
  const { example, index } = props;
  const [resultColor, setResultColor] = useState('#000');
  const [boxColor, setBoxColor] = useState('#D3D3D3');

  const resultsStore = useResult().context.data;
  const actualCorrectResults = resultsStore.correctResults;

  const onChangeResult = (value: number) => {
    let correctResults:Array<number> = [];
    if (value === example.result)  {
      setResultColor("#4ee44e");
      setBoxColor("#90EE90");
      correctResults.push(index);
    } else {
      setResultColor("#FF3232");
      setBoxColor("#ff7f7f")
    }
    resultsStore.setCorrectResults([...actualCorrectResults, ...correctResults])
  }

  return (
    <Grid item sm={4} xs={12}>
      <Box sx={{ display: 'flex', m: 1, p: 1, justifyContent: 'center', alignItems: 'center', border: `2px solid ${resultColor}`, background: boxColor }}>
        <div>{example.number1}</div>
        <div>{example.operator}</div>
        <div>{example.number2}</div>
        {"="}
        <TextField
          type="number"
          fullWidth
          onChange={(e) => onChangeResult(Number(e.target.value))}
          variant="standard"
          style={{marginLeft: '10px', maxWidth: '70px', textAlign: 'center'}}
        />
      </Box>
    </Grid>
  );
}

