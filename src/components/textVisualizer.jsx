import muneco from '@/assets/images/muneco.png';

 const encryptedText = '';
// const encryptedText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Orci montes sit et diam risus scelerisque vitae est Tortor maecenas nunc ut laoreet Eget diam mauris quam quisque ut eget fringilla sit elit Libero sodales duis fames id diam feugiat aliquet non egestas';

function TextVisualizer() {
  return (
    <div className="textVisualizer">
      {!encryptedText ? (
        <>
          <img
            className="textVisualizer__logo"
            src={muneco}
            alt=""
          />
          <p>Ningún mensaje fue encontrado</p>
          <p>Ingresa el texto que desees encriptar o desencriptar</p>
        </>
      ) : (
        <>
          <p>
            {encryptedText}
          </p>
          <button className="botonCopiarTexto">Copiar</button>
        </>
      )}
    </div>
  );
}

export default TextVisualizer;
