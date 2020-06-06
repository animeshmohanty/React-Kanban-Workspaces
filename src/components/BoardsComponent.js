import React, { useState } from "react";
import { ReactComponent as ChatBubble } from "./chat_bubble.svg";
import { ReactComponent as PersonIcon } from "./person-black.svg";

import "./BoardsComponent.scss";


const Board = () => {
  const statusColors = ["Orange", "Red", "Yellow", "Green"];
  const statusText= ["Working On it", "Struck", "Waiting for Review", "Done"];
  const priorityText = ["Urgent", "High", "Medium", "Low", "None"];
  const priorityColors = ["black", "red", "purple", "lightblue", "gray"];

  const [items] = useState([
    {
      one: "New Item",
      two: 2,
      status: "Working On it",
      dueDate: "Apr 9",
      priority: "Urgent",
    },
    {
      one: "New Item",
      two: 2,
      status: "Struck",
      dueDate: "Apr 10",
      priority: "High",
    },
    {
      one: "New Item",
      two: 2,
      status: "Waiting for Review",
      dueDate: "Apr 11",
      priority: "Medium",
    },
    {
      one: "New Item",
      two: 2,
      status: "Done",
      dueDate: "Apr 12",
      priority: "Low",
    },
    {
      one: "New Item",
      two: 2,
      status: "Struck",
      dueDate: "Apr 13",
      priority: "None",
    },
    {
      one: "New Item",
      two: 2,
      status: "Done",
      dueDate: "Apr 14",
      priority: "None",
    },
  ]);

  const addNewColumn = () => {
    alert("add columns");
  };

  return (
    <div>
      <table className="items-table">
        <tr>
          <th>Thinks To Do</th>
          <th>Owner</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th onClick={addNewColumn}>+</th>
        </tr>
        {items.map(({ one, two, status, dueDate, priority }) => (
          <tr>
            <td className="things-to-do-cell">
              <div className="to-do-text">{one}</div>
              <div className="chat-icon">
                <ChatBubble />
              </div>
            </td>
            <td className="owner-cell">
              <PersonIcon />
            </td>
            <td
              className="status"
              style={{
                backgroundColor: statusColors[statusText.indexOf(status)],
              }}
            >
              {status}
            </td>
            <td
              className="due-date"
              style={{
                textDecoration: status === "Done" ? "line-through" : "none",
              }}
            >
              {dueDate}
            </td>
            <td
              className="priority"
              style={{
                backgroundColor:
                  priorityColors[priorityText.indexOf(priority)],
              }}
            >
              {priority}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Board;
