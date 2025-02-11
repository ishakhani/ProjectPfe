import { useState } from 'react';

const Schedule = () => {
  const [currentWeek, setCurrentWeek] = useState(0);

  const schedule = [
    { time: '09:00 - 10:30', course: 'React Fondamentaux', room: 'Salle A101', instructor: 'Marie Martin' },
    { time: '11:00 - 12:30', course: 'JavaScript Avancé', room: 'Salle B202', instructor: 'Pierre Dubois' },
    { time: '14:00 - 15:30', course: 'Node.js', room: 'Salle C303', instructor: 'Sophie Bernard' },
    { time: '16:00 - 17:30', course: 'Base de données', room: 'Salle A102', instructor: 'Lucas Petit' },
  ];

  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Planning des cours</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setCurrentWeek(currentWeek - 1)}
            className="btn-primary"
          >
            Semaine précédente
          </button>
          <button
            onClick={() => setCurrentWeek(currentWeek + 1)}
            className="btn-primary"
          >
            Semaine suivante
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Horaire
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule.map((slot, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {slot.time}
                </td>
                {days.map((day, dayIndex) => (
                  <td
                    key={dayIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    <div className="card hover:shadow-lg cursor-pointer">
                      <div className="font-semibold text-blue-600">{slot.course}</div>
                      <div className="text-xs text-gray-500">{slot.room}</div>
                      <div className="text-xs text-gray-500">{slot.instructor}</div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;