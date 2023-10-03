import React, { useState } from 'react';

function UserInputCard({ onDataChange }) {
    const [income, setIncome] = useState('');
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);

    const handleInputChange = (field, value) => {
        if (field === 'income') {
            setIncome(value);
        } else if (field === 'adults') {
            setAdults(value);
        } else if (field === 'children') {
            setChildren(value);
        }
        onDataChange({ [field]: value });
    }

    return (
      <div className="bg-white rounded p-6 w-full shadow-lg">
          <div className="flex flex-row justify-around">
              {/* Income Input */}
              <div className="mb-4">
                  <label htmlFor="income" className="block text-gray-700 mb-2">Monthly Income:</label>
                  <input
                    type="number"
                    id="income"
                    placeholder="Enter your income (eg. 1200)"
                    value={income}
                    onChange={e => handleInputChange('income', e.target.value)}
                    className="w-full p-2 border rounded"
                  />
              </div>

              {/* Adults Input */}
              <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Number of Adults:</label>
                  <div className="flex items-center">
                      <button onClick={() => handleInputChange('adults', Math.max(0, adults - 1))} className="px-3 py-2 border rounded-l">-</button>
                      <input
                        type="number"
                        value={adults}
                        onChange={e => handleInputChange('adults', +e.target.value)}
                        className="w-20 text-center p-2 border-t border-b"
                      />
                      <button onClick={() => handleInputChange('adults', adults + 1)} className="px-3 py-2 border rounded-r">+</button>
                  </div>
              </div>

              {/* Children Input */}
              <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Number of Children:</label>
                  <div className="flex items-center">
                      <button onClick={() => handleInputChange('children', Math.max(0, children - 1))} className="px-3 py-2 border rounded-l">-</button>
                      <input
                        type="number"
                        value={children}
                        onChange={e => handleInputChange('children', +e.target.value)}
                        className="w-20 text-center p-2 border-t border-b"
                      />
                      <button onClick={() => handleInputChange('children', children + 1)} className="px-3 py-2 border rounded-r">+</button>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default UserInputCard;
