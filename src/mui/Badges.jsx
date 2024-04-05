import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Badges() {
  

  return (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={7} color="primary">
      <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={23} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={456} color="success">
        <MailIcon color="action" />
      </Badge>
      <div>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
    </Stack>
  );
}
