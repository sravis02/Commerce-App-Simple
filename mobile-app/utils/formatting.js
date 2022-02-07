import { monthNotations, weekdayNotations } from "./dateNotations";

export const dateToFormattedString = (date = new Date()) => {
  let weekdayNotation = weekdayNotations[date.getDay()];
  let monthNotation = monthNotations[date.getMonth()];
  console.log("Calculated date");
  return `${weekdayNotation}, ${date.getDate()}. ${monthNotation}`;
};
