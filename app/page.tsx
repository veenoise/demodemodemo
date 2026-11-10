'use client';

import { getDemoMessage } from '../lib/demoApi';
import { useEffect, useState } from 'react';
export default function Home() {
  const [demoMessage, setDemoMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchDemoMessage = async () => {
      const response = await getDemoMessage();
      setDemoMessage(response.message);
    };
    fetchDemoMessage();
  }, []);
  return (
    <div>
      {demoMessage || "No demo environment variable set"}
    </div>
  )
}
