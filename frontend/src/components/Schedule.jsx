import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Schedule = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const { darkMode } = useTheme();

  const schedule = [
    { time: '09:00 - 10:30', course: 'React Fondamentaux', room: 'Salle A101', instructor: 'Marie Martin' },
    { time: '11:00 - 12:30', course: 'JavaScript Avancé', room: 'Salle B202', instructor: 'Pierre Dubois' },
    { time: '14:00 - 15:30', course: 'Node.js', room: 'Salle C303', instructor: 'Sophie Bernard' },
    { time: '16:00 - 17:30', course: 'Base de données', room: 'Salle A102', instructor: 'Lucas Petit' },
  ];

  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Planning des cours</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setCurrentWeek(currentWeek - 1)}
            className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Semaine précédente
          </button>
          <button
            onClick={() => setCurrentWeek(currentWeek + 1)}
            className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Semaine suivante
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Horaire
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {schedule.map((slot, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {slot.time}
                </td>
                {days.map((day, dayIndex) => (
                  <td
                    key={dayIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                  >
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg transition-all cursor-pointer">
                      <div className="font-semibold text-blue-600 dark:text-blue-400">{slot.course}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{slot.room}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{slot.instructor}</div>
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