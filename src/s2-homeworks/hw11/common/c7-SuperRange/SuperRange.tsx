import React from 'react'
import {Slider, SliderProps, SxProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
   return (
      <Slider
         sx={stylesForSlider}
         {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
   )
}

const stylesForSlider: SxProps = {
   width: "200px",
   color: "#00CC22",
   "& .MuiSlider-thumb": {
      border: "1px solid #00CC22",
      background: "#fff",
      "&::before": {
         content: "''",
         position: "absolute",
         width: "6px",
         height: "6px",
         borderRadius: "50%",
         backgroundColor: "#00CC22",
         top: "50%",
         left: "50%",
         transform: "translate(-50%, -50%)",
         boxShadow: "none"
      },
   },
   "& .MuiSlider-rail": {
      background: "#8B8B8B",
      opacity: "1"
   }
}

export default SuperRange
