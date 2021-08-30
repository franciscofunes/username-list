import React from "react";
import Card from "../UI/Card";
import css from "./UserList.module.css";

const UserList = (props) => {

  return (
    <Card className={css.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={props.id}>
              {props.id} {user.name} ({user.age} años)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
