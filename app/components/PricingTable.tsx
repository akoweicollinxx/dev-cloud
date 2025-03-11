'use client';
import React from 'react';

const pricing = [
  {
    id: 1,
    title: 'Wash & Dry',
    prices: [
      { vehicleType: 'Saloon', price: '£7.00' },
      { vehicleType: 'Large', price: '£8.00' },
      { vehicleType: '4x4 / MPV', price: '£9.00' },
      { vehicleType: 'Vans', price: '£10.00' },
      { vehicleType: 'Sprinters / Transits', price: '£15.00' },
    ],
  },
  {
    id: 2,
    title: 'Mini Valet',
    prices: [
      { vehicleType: 'Saloon', price: '£14.00' },
      { vehicleType: 'Large', price: '£15.00' },
      { vehicleType: '4x4 / MPV', price: '£18.00' },
      { vehicleType: 'Vans', price: '£20.00' },
      { vehicleType: 'Sprinters / Transits', price: '£25.00' },
    ],
  },
  {
    id: 3,
    title: 'Gold Service',
    prices: [
      { vehicleType: 'Saloon', price: '£25.00' },
      { vehicleType: 'Large', price: '£30.00' },
      { vehicleType: '4x4 / MPV', price: '£30.00' },
      { vehicleType: 'Vans', price: '£40.00' },
      { vehicleType: 'Sprinters / Transits', price: '£50.00' },
    ],
  },
  {
    id: 4,
    title: 'Half Valet',
    prices: [
      { vehicleType: 'Saloon', price: '£50.00' },
      { vehicleType: 'Large', price: '£60.00' },
      { vehicleType: '4x4 / MPV', price: '£60.00' },
      { vehicleType: 'Vans', price: '£65.00' },
      { vehicleType: 'Sprinters / Transits', price: '£70.00' },
    ],
  },
  {
    id: 5,
    title: 'Full Valet',
    prices: [
      { vehicleType: 'Saloon', price: '£85.00' },
      { vehicleType: 'Large', price: '£95.00' },
      { vehicleType: '4x4 / MPV', price: '£95.00' },
      { vehicleType: 'Vans', price: '£110.00' },
      { vehicleType: 'Sprinters / Transits', price: '£120.00' },
    ],
  },
];

const PricingTable: React.FC = () => {
  return (
    <div id="pricing" className="overflow-x-auto bg-gray-300 dark:bg-gray-900 p-6 m-12 rounded-2xl shadow-lg">
      <h2 className="text-6xl text-black dark:text-sky-300 mb-6 text-center font-extrabold">Pricing</h2>
      <table className="w-full border border-gray-200 dark:border-gray-700 text-sm text-left">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">ID</th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Service</th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Saloon</th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Large</th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">4x4 / MPV</th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Vans</th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Sprinters / Transits</th>
          </tr>
        </thead>
        <tbody>
          {pricing.map((pricing) => (
            <tr key={pricing.id}>
              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-bold text-center">{pricing.id}</td>
              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold">{pricing.title}</td>
              {pricing.prices.map((p, i) => (
                <td key={i} className="border border-gray-200 dark:border-gray-700 px-4 py-2">{p.price}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
