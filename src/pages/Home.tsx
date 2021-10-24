import { Box, Button, TextField } from '@mui/material';
import { useEffect, useState, VFC } from 'react';
import { Link } from 'react-router-dom';
import { useNoc } from '../contexts';

export const Home:VFC = () => {
  const [nocValue, setNocValue] = useState<number>(20);
  const nocStore = useNoc().context.data;

  useEffect(() => {
    if(nocValue) {
      nocStore.setNocData(nocValue);
    }
  },[nocValue, nocStore])

  const isStartDisabled = !nocValue ? true : false;
  return (
    <div style={{width: '100%'}}>
      <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper' }}>
        <Box width={500} sx={{ display: 'flex', p: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <TextField
            type="number"
            fullWidth
            label="NoC"
            placeholder="NoC"
            defaultValue={20}
            InputProps={{ inputProps: { min: "20", max: "60" } }}
            value={nocValue}
            onChange={(e) => setNocValue(Number(e.target.value))}
            variant="outlined"
          />
          <Link to="/calculations">
            <Button variant="outlined" disabled={isStartDisabled}>
              Start 
            </Button>
          </Link> 
        </Box>
      </Box>
    </div>
  );
}

