import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Button } from '@mui/material';


const MENU_OPTIONS = [
    {
      label: 'Home',
      icon: 'eva:home-fill',
    },
    {
      label: 'Profile',
      icon: 'eva:person-fill',
    },
    {
      label: 'Settings',
      icon: 'eva:settings-2-fill',
    },
  ];
  
  // ----------------------------------------------------------------------
  
  export default function AccountPopover() {
    const [open, setOpen] = useState(null);
  
    const handleOpen = (event) => {
      setOpen(event.currentTarget);
    };
  
    const handleClose = () => {
      setOpen(null);
    };
  
    return (
      <>
        <IconButton
          onClick={handleOpen}
          sx={{
            width: 40,
            height: 40,
            background: (theme) => alpha(theme.palette.grey[500], 0.08),
            ...(open && {
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
            }),
          }}
        >
          <Avatar
            src={"https://cdn5.vectorstock.com/i/1000x1000/27/89/user-account-flat-icon-vector-14992789.jpg"}
            alt={"account"}
            sx={{
              width: 36,
              height: 36,
              border: (theme) => `solid 2px ${theme.palette.background.default}`,
            }}
          >
            
          </Avatar>
        </IconButton>
  
        <Popover
          open={!!open}
          anchorEl={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              p: 0,
              mt: 1,
              ml: 0.75,
              width: 200,
            },
          }}
        >
         
  
          <Divider sx={{ borderStyle: 'dashed' }} />
  
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
  
          <Divider sx={{ borderStyle: 'dashed', m: 0 }} />
  
          <MenuItem
            disableRipple
            disableTouchRipple
            onClick={handleClose}
            sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
          >
           <Link to="/LogoutPage" style={{ textDecoration: 'none', color: 'inherit' }}>
            LogoutPage
          </Link>
          </MenuItem>
        </Popover>
      </>
    );
  }