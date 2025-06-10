'use client';

import Script from 'next/script';

export default function ChatWidget() {
  return (
    <>
      <Script
        async
        id="vectorshift-chat-widget"
        src="https://app.vectorshift.ai/chatWidget.js"
        strategy="afterInteractive"
      />
      <iframe
        src="https://app.vectorshift.ai/chatbots/embedded/683a40e1ffc48f115a086b65?openChatbot=true"
        width="500px"
        height="600px"
        style={{
          border: 'none',
          position: 'fixed',
          bottom: 0,
          right: 0,
          margin: '10px',
        }}
        allow="clipboard-read; clipboard-write; microphone"
      />
    </>
  );
} 