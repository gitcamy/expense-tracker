export default function MonthSelector({ selectedMonth, setSelectedMonth }) {
  return(
    <div className="month-selector-container">  
     <div className="month-selector">
      <select value={selectedMonth} 
        onChange={(e) => {
          const month = e.target.value;
          setSelectedMonth(month);
        } 
      }>
        <option value="0">January</option>
        <option value="1">February</option>
        <option value="2">March</option>
        <option value="3">April</option>
        <option value="4">May</option>
        <option value="5">June</option>
        <option value="6">July</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="11">December</option>
      </select>
  </div>
    </div>
   );
  }