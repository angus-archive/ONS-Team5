import React, { useState } from 'react';

function UserInputCard({ onDataChange }) {
    const [expenditure, setExpenditure] = useState('');
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [cpi, setCPI] = useState(0);

    const handleInputChange = (field, value) => {
        if (field === 'expenditure') {
            setExpenditure(value);
        } else if (field === 'adults') {
            setAdults(value);
        } else if (field === 'cpi') {
            setCPI(value);
        } else if (field === 'children') {
            setChildren(value);
        }
        onDataChange({ [field]: value });
    }

    return (
      <div className="bg-white rounded p-6 w-full shadow-lg">
          <div className="flex flex-row justify-around">

              {/* CPI */}
              <div className="mb-4">
                  <label htmlFor="cpi" className="block text-gray-700 mb-2">CPI:</label>
                  <input
                    type="number"
                    id="cpi"
                    placeholder="Enter the current CPI value:"
                    value={cpi}
                    onChange={e => handleInputChange('cpi', e.target.value)}
                    className="w-full p-2 border rounded"
                  />
              </div>

              {/* Income Input */}
              <div className="mb-4">
                  <label htmlFor="income" className="block text-gray-700 mb-2">Weekly Expenditure:</label>
                  <input
                    type="number"
                    id="expenditure"
                    placeholder="Enter your weekly expenditure (eg. 500)"
                    value={expenditure}
                    onChange={e => handleInputChange('expenditure', e.target.value)}
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
