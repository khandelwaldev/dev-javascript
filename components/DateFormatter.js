import React from "react";
import dayjs from "dayjs";

const formatDate = (dateString) => {
  // Assuming dateString is in the format "YY-MM-DD"
  const [year, month, day] = dateString.split("-").map(Number);

  const formattedDate = dayjs()
    .year(year + 2000)
    .month(month - 1)
    .date(day)
    .format("MMMM DD, YYYY");

  return formattedDate;
};

const DateFormatter = ({ dateString }) => {
  const formattedDate = formatDate(dateString);
  return <span>{formattedDate}</span>;
};

export default DateFormatter;
