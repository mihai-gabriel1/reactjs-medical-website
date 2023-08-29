import React from "react";

const Bookings = () => {
  return (
    <div className="bookings-section">
      <h2 className="section-title">Formular de programare online</h2>
      <p className="bookings-about">
        Mai jos puteti consulta intervalul de lucru al fiecarui medic, inainte
        de a va programa.
      </p>
      <table className="table text-center">
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
      <h2 className="section-title">Suntem la doar un click distanta.</h2>
    </div>
  );
};

export default Bookings;
