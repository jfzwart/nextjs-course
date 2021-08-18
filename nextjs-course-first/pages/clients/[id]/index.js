import React from "react";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();

  function loadProjectHandler() {
    // do some things
    // navigate away
    router.push("/clients/max/projecta");
  }

  return (
    <div>
      <h1>The Client Project Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
