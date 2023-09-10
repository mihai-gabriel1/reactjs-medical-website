import React from "react";

const Bookings = () => {
  // Get today's date in the format yyyy-mm-dd
  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="bookings-section"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="section-title">Formular de programare online</h2>
      <p className="bookings-about">
        Mai jos puteți consulta intervalul de lucru al fiecărui medic, înainte
        de a vă programa.
      </p>
      <table className="table text-center container">
        <thead>
          <tr>
            <th scope="col">1</th>
            <th scope="col">Dr. Ali Cranta</th>
            <th scope="col">
              Marți, Joi, și Vineri interval orar 14:00 - 21:00
            </th>
            <th scope="col">Miercuri - interval orar 08:00 - 15:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2</th>
            <td>Dr. Brânzei Speranța Maria</td>
            <td>Luni, Marți, Joi, și Vineri, interval orar 09:30 - 14:00</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th scope="row">3</th>
            <td>Dr. Drugă Oana-Eufrosina</td>
            <td>
              Luni - 14:00-20:00 | Marți - 08:00-16:30 | Miercuri - 14:00-20:00
            </td>
            <td>Joi - 08:00-16:30 | Vineri și Sâmbătă - 08:00-11:00</td>
          </tr>
        </tbody>
      </table>
      <h2 className="section-title">Suntem la doar un click distanță.</h2>
      <div className="container">
        <form
          action="https://formsubmit.co/098bc1590acbb621df00c35760dfa9f3"
          method="POST"
          className="row g-3"
        >
          <input
            type="hidden"
            name="_next"
            value="https://alicrantamedicalcenter.com/thanks.html"
          />
          <div className="col-md-6">
            <label htmlFor="inputFirstName" className="form-label">
              Nume:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName"
              defaultValue="Popa"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLastName" className="form-label">
              Prenume:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              defaultValue="Andrei"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              Adresa de email:
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              defaultValue="abc@xyz.com"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">
              Număr de telefon:
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              defaultValue="+40712545676"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDoctor" className="form-label">
              Programare pentru:
            </label>
            <select id="inputDoctor" className="form-select">
              <option defaultValue>Dr. Ali Cranta</option>
              <option>Dr. Brânzei Speranta Maria</option>
              <option>Dr. Drugă Oana-Eufrosina</option>
              <option>Popescu Cornelia</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputDescription" className="form-label">
              Descriere simptome:
            </label>
            <textarea
              id="inputDescription"
              className="form-control"
              placeholder="Doresc o programare pentru un examen pneumologic."
            ></textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputDate" className="form-label">
              Data programarii:
            </label>
            <input
              type="date"
              className="form-control"
              id="inputDate"
              min={today} // Set the minimum date to today
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputTime" className="form-label">
              Interval orar:
            </label>
            <input
              type="time"
              className="form-control"
              id="inputTime"
              onChange={(e) => {
                const selectedTime = e.target.value;
                if (selectedTime < "08:00" || selectedTime > "20:00") {
                  // Reset the input or show an error message
                  e.target.value = "08:00"; // Set it to your desired default time
                }
              }}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Solicită o programare
            </button>
          </div>
          <div className="col-12">
            <p className="message-us">
              <a href="https://formsubmit.co/el/wasita">
                Ai nevoie de ajutor? Trimite-ne un mesaj.
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bookings;
