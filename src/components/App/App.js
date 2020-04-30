import React, { useEffect, useState } from "react";
import { forwardEmail } from "../../utils";
import "./App.css";

function App() {
  const [inboxId, setInboxId] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="current-email">
        Email Address: {email}
        Inbox Id: {inboxId}
      </div>
      <button
        onClick={() => forwardEmail("13219040-493a-49b0-a2f2-069e65bbd8ee")}
        style={{
          backgroundColor: "blue",
          height: "40px",
          width: "200px"
        }}
      >
        forward an email!
      </button>
    </div>
  );
}

export default App;
