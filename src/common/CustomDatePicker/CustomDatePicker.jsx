
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

export const CustomDatePicker = () => {

  const [value, setValue] = useState(new Date());

  return <DatePicker value={value} onChange={setValue} />;

}