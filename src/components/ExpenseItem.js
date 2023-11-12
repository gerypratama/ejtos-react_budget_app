import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {props.currency}
        {props.cost}
      </td>
      <td>
        <button
          onClick={() => increaseAllocation(props.name)}
          style={{
            width: 36,
            height: 36,
            padding: "1px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "green",
            color: "white",
            fontSize: 36,
            fontWeight: 800,
            border: "none",
            borderRadius: "50%",
          }}
        >
          +
        </button>
      </td>
      <td>
        <button
          onClick={() => decreaseAllocation(props.name)}
          style={{
            width: 36,
            height: 36,
            padding: "1px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            color: "white",
            fontSize: 36,
            fontWeight: 800,
            border: "none",
            borderRadius: "50%",
          }}
        >
          -
        </button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
