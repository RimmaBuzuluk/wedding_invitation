import { useState } from "react";
import "./App.css";
import vectorImg from "../src/assets/Vector.png";
import RSVPForm from "./components/RSVPForm";


export default function WeddingInvite() {
  return (
    <div className="page">
      <section className="section hero" id="welcome">
        <div className="hero-content">
          <h1 className="hero-names">
            Oleksandr <span className="amp">and</span> Anna
          </h1>          </div>
      </section>


      {/* 5.2 Звернення до гостей */}
      <section className="section message" id="message">
        <div className="section-inner">
          <div
            className="message-top-img"
            style={{ backgroundImage: `url(${vectorImg})` }}
          ></div>

          <h2 className="section-title">Дорогі наші рідні та друзі!</h2>
          <p className="section-text">
            Ми з радістю запрошуємо вас розділити з нами особливий день — день
            нашого весілля. Ваша присутність зробить це свято ще теплішим та
            сповненим любові.
          </p>
          <p className="section-text">
            Будемо щасливі бачити вас поруч, ділитися сміхом, танцями та
            незабутніми моментами, що залишаться з нами назавжди.
          </p>
        </div>
      </section>

      {/* календар  */}

      <section className="section calendar" id="calendar">
  <div className="section-inner">
    <h2 className="section-title">Save the Date</h2>

    <div className="calendar-wrapper">
      <div className="calendar-header">
        May 2026
      </div>

      <div className="calendar-grid">
        {/* Дні тижня */}
        <div className="day-name">Mon</div>
        <div className="day-name">Tue</div>
        <div className="day-name">Wed</div>
        <div className="day-name">Thu</div>
        <div className="day-name">Fri</div>
        <div className="day-name">Sat</div>
        <div className="day-name">Sun</div>


        {/* Порожні клітинки (1 травня 2026 — п’ятниця) */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        {/* Дні місяця */}
        {[...Array(31)].map((_, i) => {
          const day = i + 1;
          return (
            <div
              key={day}
              className={`calendar-day ${day === 22 ? "wedding-day" : ""}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>



      {/* 5.3 Таймінг подій */}
      <section className="section timeline" id="schedule">
      <div className="section-inner timeline-inner">
        <h2 className="section-title">Розклад свята</h2>
        <ul className="timeline-list">
          <li className="timeline-item">
            <div className="timeline-time">10:30</div>
            <div className="timeline-content">
              <h3 className="timeline-event">Збір гостей</h3>
              <p className="timeline-desc">Центральний РАГС м. Києва</p>
              <p className="timeline-map">📍 Точка на карті</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-time">11:00</div>
            <div className="timeline-content">
              <h3 className="timeline-event">Церемонія</h3>
              <p className="timeline-desc">Урочиста церемонія шлюбу</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-time">12:00</div>
            <div className="timeline-content">
              <h3 className="timeline-event">Вітальний фуршет</h3>
              <p className="timeline-desc">Легкі закуски та напої</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-time">10:30</div>
            <div className="timeline-content">
              <h3 className="timeline-event">Збір гостей</h3>
              <p className="timeline-desc">Центральний РАГС м. Києва</p>
              <p className="timeline-map">📍 Точка на карті</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-time">11:00</div>
            <div className="timeline-content">
              <h3 className="timeline-event">Церемонія</h3>
              <p className="timeline-desc">Урочиста церемонія шлюбу</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-time">12:00</div>
            <div className="timeline-content">
              <h3 className="timeline-event">Вітальний фуршет</h3>
              <p className="timeline-desc">Легкі закуски та напої</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section className="section informations" id="informations">
  <div className="section-inner">
    <h2 className="section-title">Деталі</h2>

    <div className="info-grid">
      
      {/* 1 */}
      <div className="info-card">
        <div className="info-icon">🤍</div>
        <h3 className="info-title">Найцінніше — ви</h3>
        <p className="info-text">
          Найголовніше для нас — ваша присутність, щира усмішка та гарний настрій.
        </p>
      </div>

      {/* 2 */}
      <div className="info-card">
        <div className="info-icon">🍾</div>
        <h3 className="info-title">Замість квітів</h3>
        <p className="info-text">
          Замість квітів, які швидко зів’януть, нам буде приємно отримати від вас пляшечку напою.
        </p>
      </div>

      {/* 3 */}
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
  );
}
