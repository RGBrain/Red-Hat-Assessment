"use client";
import { useState, useEffect } from "react";

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  return clientReady ? <>{children}</> : null;
};

export default ClientOnly;
