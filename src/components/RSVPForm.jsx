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
    { label: "Шампанське 🥂", value: "Шампанське" },
    { label: "Коньяк 🥃", value: "Коньяк" },
    { label: "Горілка 🥃", value: "Горілка" },
    { label: "Вино 🍷", value: "Вино" },
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
    console.log(form);
    // Тут можна вставити ваш fetch
    alert("Дякуємо за відповідь ❤️");
  };


  return (
    <form onSubmit={handleSubmit} className="rsvp-form">
      <h2 className="section-title">Підтвердження присутності</h2>

      {/* Імʼя */}
      <label className="field">
        <span>Ваше ім’я</span>
        <input
          type="text"
          placeholder="Наприклад, Оля та Андрій"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
      </label>

      {/* Чи будете на весіллі */}
      <div className="field">
        {/* <span>Чи будете на весіллі?</span> */}
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

      {/* Чи плануєте бути в РАГС */}
      <div className="field">
        <span>Чи плануєте бути в РАГС?</span>
        <label>
          <input
            type="radio"
            name="willRegister"
            value="Так"
            checked={form.willRegister === "Так"}
            onChange={(e) =>
              setForm({ ...form, willRegister: e.target.value })
            }
          />
          Так
        </label>
        <label>
          <input
            type="radio"
            name="willRegister"
            value="Ні"
            checked={form.willRegister === "Ні"}
            onChange={(e) =>
              setForm({ ...form, willRegister: e.target.value })
            }
          />
          Ні
        </label>
      </div>

      {/* Алкоголь */}
      <div className="field">
        <span>Які напої плануєте? (можна обрати кілька)</span>
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
    </form>
  );
}
