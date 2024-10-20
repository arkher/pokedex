import React, { useEffect, useState } from "react";

import axios from "axios";
import { Button, ButtonGroup } from '@chakra-ui/react'


function App() {
  const [loading, setLoading] = useState(false);
  const [healthCheckMessage, setHealthCheckMessage] = useState("Loading...");

  // useEffect(() => {
  //   healthCheckPing(setHealthCheckMessage, setLoading);
  // }, []);

  return (
    <div className="text-green-500">
      Successfuly started Client
      <div className="bg-red-500 p-4">
        Health Check from server: {loading ? "Loading..." : healthCheckMessage}
      </div>
    </div>
  );
}

export default App;
