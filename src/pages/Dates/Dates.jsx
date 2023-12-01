
import { useState, useEffect } from "react";
import "./Dates.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import dayjs from 'dayjs'

export const Dates = () => {

  const [startDate, setStartDate] = useState(new Date());

  useEffect(()=>{

    if(dayjs(startDate).isBefore(dayjs())){
        console.log("Esta fecha es anterior y no puedes seleccionarla")

    } else {
        console.log(`Genial, tienes cita el ${dayjs(startDate).format('dddd MMM YY')}`)

        let cuanto = dayjs(startDate).diff(dayjs(), "days");

        console.log(`Quedan ${cuanto} dias para tatuarte...`)
    }

  },[startDate])

  return (
    <div className="datesDesign">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};
