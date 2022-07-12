import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import {useNavigate} from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(value===0) navigate('/');
    else if(value===1) navigate('/movies');
    else if(value===2) navigate('/series');
    else if(value===3) navigate('/search');
  }, [value])
  
  return (
    <Box sx={{ width: "100%",
    position: "fixed",
    bottom: 0,
    bgcolor: "black",
    zIndex: 100,
    boxShadow: "0px 1px 5px #475064"
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ bgcolor: "black",
        "& .MuiBottomNavigationAction-root": {
            color: "white"},
        "& .Mui-selected, .Mui-selected > svg": {
            color: "1974CB"}
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
