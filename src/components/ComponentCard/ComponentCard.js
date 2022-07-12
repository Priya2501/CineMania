import React from 'react'
import { img_300, unavailable } from "../../config/config";
import Badge from '@mui/material/Badge';
import './ComponentCard.css'
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from '../darkTheme';

const ComponentCard = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className='media'>
      <ThemeProvider theme={darkTheme}>
      <Badge
        badgeContent={vote_average}
        color={vote_average >= 7 ? "primary" : "secondary"}
      />
      </ThemeProvider>
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  )
}

export default ComponentCard