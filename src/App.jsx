import { useState } from 'react';
import Header from "./components/header";
import TextVisualizer from "./components/textVisualizer";
import TextArea from "./components/textArea";

function App() {
  const [encryptedText, setEncryptedText] = useState('');

  function handleChangedText(text) {
    setEncryptedText(text)
  }

  return (
    <>
      <Header />
      <TextArea
        onEncryptedText={handleChangedText}
        onDencryptedText={handleChangedText}
      />
      <TextVisualizer
        encryptedText={encryptedText}
      />
    </>
  );
}

export default App;
