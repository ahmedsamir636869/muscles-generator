'use client'
import React, { useState } from 'react';

function CalorieCalculator() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('1');
  const [totalCalories, setTotalCalories] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCalories();
  };

  const calculateCalories = () => {
    setLoading(true);
    if (age === '' || weight === '' || height === '' || age > 80 || age < 15) {
      setError('Please make sure the values you entered are correct');
      setLoading(false);
    } else {
      let result;
      if (gender === 'male') {
        const baseCalories = 66.5 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.755 * parseFloat(age));
        switch (activity) {
          case '1':
            result = 1.2 * baseCalories;
            break;
          case '2':
            result = 1.375 * baseCalories;
            break;
          case '3':
            result = 1.55 * baseCalories;
            break;
          case '4':
            result = 1.725 * baseCalories;
            break;
          case '5':
            result = 1.9 * baseCalories;
            break;
          default:
            break;
        }
      } else {
        const baseCalories = 655 + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age));
        switch (activity) {
          case '1':
            result = 1.2 * baseCalories;
            break;
          case '2':
            result = 1.375 * baseCalories;
            break;
          case '3':
            result = 1.55 * baseCalories;
            break;
          case '4':
            result = 1.725 * baseCalories;
            break;
          default:
            break;
        }
      }
      setTotalCalories(result.toFixed(2));
      setError('');
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold text-center mb-4">Calorie Calculator App</h1>
          <form onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age</label>
              <input type="number" id="age" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ages 15-80" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
              <select id="gender" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">Weight (kg)</label>
              <input type="number" id="weight" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="In kilograms" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>

            <div className="mb-4">
              <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-2">Height (cm)</label>
              <input type="number" id="height" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="In centimeters" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>

            <div className="mb-4">
              <label htmlFor="activity" className="block text-gray-700 text-sm font-bold mb-2">Activity</label>
              <select id="activity" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={activity} onChange={(e) => setActivity(e.target.value)}>
                <option value="1">Sedentary (little or no exercise)</option>
                <option value="2">Lightly active (light exercise/sports 1-3 days/week)</option>
                <option value="3">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                <option value="4">Very active (hard exercise/sports 6-7 days a week)</option>
                <option value="5">Extra active (very hard exercise/sports & physical job or 2x training)</option>
              </select>
            </div>

            <div className="mb-6">
              <button type="button" onClick={calculateCalories} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Calculate</button>
            </div>

          </form>

          <div id="results" className="pt-4" style={{ display: totalCalories ? 'block' : 'none' }}>
            <h5>Total Calories</h5>
            <div className="form-group">
              <div className="input-group">
                <input type="number" className="form-control" id="total-calories" value={totalCalories} disabled />
              </div>
            </div>
          </div>
          {error && <div className="text-red-500 text-xs italic">{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default CalorieCalculator;
