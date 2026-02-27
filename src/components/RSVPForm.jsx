import { useState } from "react";
import "../App.css";

export default function RSVPForm() {
  const [form, setForm] = useState({
    name: "",
    willAttend: "",
    willRegister: "",
    drinks: [],
    wishes: "",
  });

  const drinkOptions = [
    { label: "Ігристе 🥂", value: "Шампанське" },
    { label: "Вино 🍷", value: "Вино" },
    { label: "Коньяк 🥃", value: "Коньяк" },
    { label: "Горілка 🧊", value: "Горілка" },
    { label: "Безалкогольні напої 🧃", value: "Безалкогольні напої"}
  ];

  const handleDrinkChange = (value) => {
    if (form.drinks.includes(value)) {
      setForm({
        ...form,
        drinks: form.drinks.filter((d) => d !== value),
      });
    } else {
      setForm({ ...form, drinks: [...form.drinks, value] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/library/d/1Ga5DcwxVm29hasa2IkuW81fh0sumw9l_TZWLHn5xPvOTgT-xqmwVGdXB/3",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );
  
      const result = await response.json();
  
      if (result.result === "success") {
        alert("Дякуємо за відповідь ❤️");
        setForm({
          name: "",
          willAttend: "",
          willRegister: "",
          drinks: [],
          wishes: "",
        });
      }
    } catch (error) {
      console.error("Помилка:", error);
      alert("Щось пішло не так 😢");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="rsvp-form">
      <h2 className="section-title">Підтвердження присутності</h2>

      <label className="field">
        <span>Ваше ім’я</span>
        <input
          type="text"
          placeholder="Наприклад, Оля Петенко"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
      </label>

      <div className="field">
        <span>Чи будете на весіллі?</span>
        <label>
          <input
            type="radio"
            name="willAttend"
            value="Так"
            checked={form.willAttend === "Так"}
            onChange={(e) => setForm({ ...form, willAttend: e.target.value })}
            required
          />
          Так, буду з радістю
        </label>
        <label>
          <input
            type="radio"
            name="willAttend"
            value="Ні"
            checked={form.willAttend === "Ні"}
            onChange={(e) => setForm({ ...form, willAttend: e.target.value })}
          />
          На жаль, не зможу
        </label>
      </div>

   

      {/* Алкоголь */}
      <div className="field">
        <span>Напої: (можна обрати декілька)</span>
        <div className="checkbox-group">
          {drinkOptions.map((drink) => (
            <label key={drink.value}>
              <input
                type="checkbox"
                value={drink.value}
                checked={form.drinks.includes(drink.value)}
                onChange={() => handleDrinkChange(drink.value)}
              />
              {drink.label}
            </label>
          ))}
        </div>
      </div>

      {/* Побажання */}
      <label className="field">
        <span>Ваші побажання</span>
        <textarea
          placeholder="Напишіть тут свої побажання..."
          value={form.wishes}
          onChange={(e) => setForm({ ...form, wishes: e.target.value })}
          rows={4}
        />
      </label>

      <button type="submit" className="primary-button">
        Відправити відповідь
      </button>
      <p className="rsvp-deadline">
    Будь ласка, надішліть свої відповіді до 19.04.2026
  </p>

    </form>
  );
}
