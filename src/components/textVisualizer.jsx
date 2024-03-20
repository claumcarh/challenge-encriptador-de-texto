import Button from './button';
import muneco from '@/assets/images/muneco.png';
import "@/assets/styles/components/textVisualizer.scss";

function TextVisualizer({ encryptedText }) {
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(encryptedText);
    } catch (error) {
    }
  }

  return (
    <div className="textVisualizer">
      {!encryptedText ? (
        <>
          <img
            className="textVisualizer__logo"
            src={muneco}
            alt=""
          />
          <p className="textVisualizer__text1">Ningún mensaje fue encontrado</p>
          <p className="textVisualizer__text2">Ingresa el texto que desees encriptar o desencriptar</p>
        </>
      ) : (
        <>
          <p>
            {encryptedText}
          </p>
          <Button onClick={() => handleCopy() }>Copiar</Button>
        </>
      )}
    </div>
  );
}

export default TextVisualizer;
