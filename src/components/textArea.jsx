import { useState } from 'react';
import Button from './button';
import '@/assets/styles/components/textArea.scss';



function TextArea({ onEncryptedText, onDencryptedText }) {
  const [text, setText] = useState('');

  function encryptText() {
    const encryptedText = text
      .replaceAll(/e/gi, 'enter')
      .replaceAll(/i/gi, 'imes')
      .replaceAll(/a/gi, 'ai')
      .replaceAll(/o/gi, 'ober')
      .replaceAll(/u/gi, 'ufat');

    onEncryptedText(encryptedText);
  }

  function decryptText() {
    const decryptedText = text
      .replaceAll(/enter/gi, 'e')
      .replaceAll(/imes/gi, 'i')
      .replaceAll(/ai/gi, 'a')
      .replaceAll(/ober/gi, 'o')
      .replaceAll(/ufat/gi, 'u');

    onDencryptedText(decryptedText);
  }

  function handleChangeText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <textarea
        className="textArea__text"
        placeholder="Ingresa el texto aqui"
        value={text}
        onChange={handleChangeText}
      />

      <p className="textArea__note">Solo letras minúsculas y sin acentos</p>
      <div className="textArea__button-container">
        <Button
          modifier="primary"
          onClick={() => encryptText()}
        >
          Encriptar
        </Button>
        <Button
          modifier="secondary"
          onClick={() => decryptText()}
        >
          Desencriptar
        </Button>
      </div>
    </div>
  );
}

export default TextArea;
