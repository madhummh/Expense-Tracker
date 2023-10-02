import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  // console.log(props, "this one");

  const [filteredYear, setFilteredYear] = useState("2020");
  // const [filterInfoText, setFilterInfotext] = useState("2019, 2021 & 2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // if (selectedYear === "2019") {
    //   setFilterInfotext("2020, 2021 & 2022");
    // } else if (selectedYear === "2020") {
    //   setFilterInfotext("2019, 2021 & 2022");
    // } else if (selectedYear === "2021") {
    //   setFilterInfotext("2019,2020 & 2022");
    // } else {
    //   setFilterInfotext("2019 , 2020 & 2021");
    // }
  };

  console.log(props.items, "from filtered ff");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />

        {/* p tag written to understand derived component concepts */}
        {/* <p>Data for years {filterInfoText} is hidden</p> */}
      </Card>
    </div>
  );
}
export default Expenses;
