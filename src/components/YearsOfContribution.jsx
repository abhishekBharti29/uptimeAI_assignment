import { YEARS_OF_CONTRIBUTION } from "../utils/constants"
import { useState } from "react";

const YearsOfContribution = () => {

  const [selectedYear, setSelectedYear] = useState(2026);

  function handleYearSelection(year) {
    setSelectedYear(year)
  }

  return (
    <div className="years-of-contribution">
      {
        YEARS_OF_CONTRIBUTION.map((year) => (
          <button
            onClick={() => handleYearSelection(year)}
            key={year}
            className={"year-btn" + " " + (selectedYear === year ? "active" : "")}
          >
            {year}
          </button>
        ))
      }
    </div>
  )
}

export default YearsOfContribution;