import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Destructure the props properly
export default function DateSelector({ value, handleDateChange }) {
  function formatDate(dateString) {
    console.log(dateString);
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        {/* Make sure to pass value and onChange properly */}
        <DatePicker
          value={value}
          onChange={(value) => handleDateChange(formatDate(value))}
          label="Date"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
