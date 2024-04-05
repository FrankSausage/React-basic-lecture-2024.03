import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function Buttons() {
  return (
    <div>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <br />
    <Stack spacing={2} direction="row">
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
      Success
      </Button>
      <Button variant="outlined" color="error">
      Error
      </Button>
    </Stack>
    <br />
    <Stack spacing={2} direction="row">
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
    </div>
  );
}
