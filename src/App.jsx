import { useState } from 'react';
import './style.css'; // Importamos el archivo de estilos

// Define los signos del zodiaco y sus rangos de fecha con íconos SVG
const zodiacSigns = [
  { name: 'Aries', range: '21 de marzo - 19 de abril', icon: `/aries.png`, description: 'Eres un líder audaz, enérgico y apasionado.' },
  { name: 'Tauro', range: '20 de abril - 20 de mayo', icon: '/taurus.png', description: 'Eres práctico, fiable y con una gran determinación.' },
  { name: 'Géminis', range: '21 de mayo - 20 de junio', icon: '/gemini.png', description: 'Eres curioso, adaptable e increíblemente versátil.' },
  { name: 'Cáncer', range: '21 de junio - 22 de julio', icon: '/cancer.png', description: 'Eres emocional, protector y profundamente intuitivo.' },
  { name: 'Leo', range: '23 de julio - 22 de agosto', icon: '/leo.png', description: 'Eres carismático, generoso y un líder nato.' },
  { name: 'Virgo', range: '23 de agosto - 22 de septiembre', icon: '/virgo.png', description: 'Eres analítico, meticuloso y muy trabajador.' },
  { name: 'Libra', range: '23 de septiembre - 22 de octubre', icon: '/libra.png', description: 'Eres diplomático, justo y buscas la armonía.' },
  { name: 'Escorpio', range: '23 de octubre - 21 de noviembre', icon: '/scorpio.png', description: 'Eres apasionado, misterioso y con una gran fuerza de voluntad.' },
  { name: 'Sagitario', range: '22 de noviembre - 21 de diciembre', icon: '/sagittarius.png', description: 'Eres aventurero, optimista y de espíritu libre.' },
  { name: 'Capricornio', range: '22 de diciembre - 19 de enero', icon: '/capricorn.png', description: 'Eres ambicioso, disciplinado y muy responsable.' },
  { name: 'Acuario', range: '20 de enero - 18 de febrero', icon: '/aquarius.png', description: 'Eres original, independiente y un visionario.' },
  { name: 'Piscis', range: '19 de febrero - 20 de marzo', icon: '/pisces.png', description: 'Eres compasivo, soñador y muy creativo.' },
];

function getZodiacSign(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return zodiacSigns[0];
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return zodiacSigns[1];
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return zodiacSigns[2];
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return zodiacSigns[3];
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return zodiacSigns[4];
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return zodiacSigns[5];
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return zodiacSigns[6];
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return zodiacSigns[7];
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return zodiacSigns[8];
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return zodiacSigns[9];
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return zodiacSigns[10];
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return zodiacSigns[11];

  return null;
}

export default function App() {
  const [birthDate, setBirthDate] = useState('');
  const [name, setName] = useState('');
  const [horoscope, setHoroscope] = useState(null);
  const [visible, setVisible] = useState(false);

  const calculateHoroscope = () => {
    if (!birthDate || !name) {
      setHoroscope(null);
      setVisible(false);
      return;
    }
    const date = new Date(birthDate);
    const sign = getZodiacSign(date);
    setHoroscope(sign);
    setVisible(true);
  };

  return (
    <div className="app-container">
      <div className="horoscope-section">
        <div className="horoscope-card">
          <h3 className="card-title">
            Calculadora de Horóscopo
          </h3>
          <p className="card-subtitle">
            Introduce tu nombre y fecha de nacimiento para descubrir tu signo del zodiaco.
          </p>

          <div className="form-container">
            <div className="input-container">
              <span className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="20" height="20"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 47.7L192 320H256l13.7-16.3c15.2-18.2 38.6-28.7 63.9-28.7c59.2 0 107.4 48.2 107.4 107.4c0 36.1-17.8 68.3-45.2 87.7c-29.1 20.3-64.4 31.7-101.4 31.7c-37.1 0-72.3-11.4-101.4-31.7c-27.4-19.4-45.2-51.6-45.2-87.7c0-25.3 10.5-48.7 28.7-63.9z"/></svg>
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Introduce tu nombre"
                className="horoscope-input"
              />
            </div>
            <div className="input-container">
              <span className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="20" height="20"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/></svg>
              </span>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="horoscope-input"
              />
            </div>
            <button
              onClick={calculateHoroscope}
              className="calculate-button"
            >
              Calcular Signo
            </button>
          </div>
        </div>
      </div>

      {visible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => setVisible(false)}
              className="close-button"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <div className="horoscope-result">
              {horoscope && (
                <>
                  <p className="result-title">
                    Hola, {name.trim() || 'amigo'} tu zodiaco es {horoscope.name}
                  </p>
                  <div className="result-icon">
                    <img src={horoscope.icon} alt={`Signo ${horoscope.name}`} width="100" height="100" />
                  </div>
                  <h2 className="result-name">
                    {horoscope.name}
                  </h2>
                  <p className="result-range">
                    ({horoscope.range})
                  </p>
                  <p className="result-description">
                    {horoscope.description}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
