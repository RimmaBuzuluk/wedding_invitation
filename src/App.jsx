import { useState, useEffect } from "react";
import "./App.css";
import vectorImg from "../src/assets/Vector.png";
import RSVPForm from "./components/RSVPForm";


export default function WeddingInvite() {
  const targetDate = new Date("2026-05-22T13:30:00+03:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="phone-container">
      <div className="page">
      <section className="section hero" id="welcome">
        <div className="hero-content">
          <h1 className="hero-names">
            Oleksandr <span className="amp">and</span> Anna
          </h1>  

          
                  </div>
                  <p className="hero-date">22 May 2026</p>

      </section>


      {/* Таймер до події */}
      <section className="section countdown" id="countdown">
        <div className="section-inner countdown-inner">
          <div className="countdown-grid">
            <div className="countdown-item">
              <div className="countdown-value">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <div className="countdown-label">днів</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="countdown-label">годин</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="countdown-label">хвилин</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="countdown-label">секунд</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section message" id="message">
        <div className="section-inner">
         
          <h2 className="section-title">ЗАПРОШЕННЯ НА ВЕСІЛЛЯ</h2>
          <p className="section-text">
          Дорогі наші рідні та друзі! 
Ми одружуємось! 💍
І будемо безмежно щасливі, якщо саме ви розділите з нами цей день.

Запрошуємо вас на наше весілля — день, наповнений любов’ю, щирими усмішками,
теплими обіймами та гучними танцями.

Давайте разом створимо спогади, які залишаться з нами на все життя 🤍
          </p>
          
        </div>
      </section>



      <section className="section timeline" id="schedule">
      <div className="section-inner timeline-inner">
        <h2 className="section-title">Розклад свята</h2>
        <ul className="timeline-list">
          <li className="timeline-item">
            <div className="timeline-time">13:30</div>
            <div className="timeline-content">
              <h3 className="timeline-event">Збір гостей</h3>
              <p className="timeline-desc">Іванкова {'>'} Бориспіль {'>'} Київ {'>'} Обухів </p>
              {/* <p className="timeline-map">📍 Точка на карті</p> */}
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-time">14:30</div>
            <div className="timeline-content">
              <h3 className="timeline-event">Збір гостей</h3>
              <p className="timeline-desc">м. Обухів вул. Київська 119 </p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-time">10:30</div>
            <div className="timeline-content">
              <h3 className="timeline-event">Банкет</h3>
              <p className="timeline-desc">Ресторан "Ресторан «Міністерство смаку»"</p>
              <p className="timeline-map">
  <a
    href="https://maps.app.goo.gl/1xzsnwxbrwjFiiRF9"
    target="_blank"
    rel="noopener noreferrer"
  >
    📍 Точка на карті
  </a>
</p>
            </div>
          </li>
     
          <li className="timeline-item">
            <div className="timeline-time">22:00</div>
            <div className="timeline-content">
              <h3 className="timeline-event">Завершення + трансферs</h3>
              <p className="timeline-desc">Підсумок нашого дня</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section className="section informations" id="informations">
  <div className="section-inner">
    <h2 className="section-title">Деталі</h2>

    <div className="info-grid">
      
      <div className="info-card">
        <div className="info-icon">🤍</div>
        <h3 className="info-title">Дрескод</h3>
        <p className="info-text">
        На нашому святі немає дрескоду. 
    Обирайте вбрання, у якому вам буде комфортно та святково. 
    Найголовніше — щоб ви почувалися легко, впевнено та із гарним настроєм.        </p>
      </div>

      <div className="info-card">
        <div className="info-icon">🍾</div>
        <h3 className="info-title">Замість квітів</h3>
        <p className="info-text">
      
Замість квітів (які, на жаль, ми не зможемо всі забрати додому) будемо раді отримати щось, що залишиться з нами надовго: пляшечку алкоголю для нашої сімейної колекції, улюблену книгу з підписом, настільну гру для спільних вечорів або сертифікат на враження чи покупку.
Обіцяємо — кожен такий подарунок стане частиною історії нашої родини 🤍        </p>
      </div>

      <div className="info-card">
        <div className="info-icon">📸</div>
        <h3 className="info-title">Telegram-чат</h3>
        <p className="info-text">
          Приєднуйтесь до чату, щоб ділитися фото та враженнями.
        </p>

   

        <a 
          href="https://t.me/+IwvHd8VbLURjYzYy"
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-button"
        >
          Приєднатись
        </a>
      </div>

    </div>
  </div>
</section>


      {/* Секція з формою RSVP */}
      <section className="section rsvp" id="rsvp">
        <div className="section-inner">
          <RSVPForm />
        </div>
      </section>
      </div>
    </div>
  );
}
