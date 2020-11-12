import React from 'react';
import axios from "axios";

const doClick = () => {
  let baseUrl = 'http://localhost:7777/v1/account/user_list';
  axios.get(baseUrl)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function (response) {
    console.log(response);
  });

}

export function User(props: any) {
    console.log(props);
    return (
      <div className="user-comp">
          User comp
          <a onClick={doClick}>Click me</a>
      </div>
    )
}
