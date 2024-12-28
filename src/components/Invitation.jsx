// import React, { useState } from 'react';

// const Invitation = () => {
//   const [invitations, setInvitations] = useState([
//     {
//       roomid: 1,
//       Admin: "Shubham Patil",
//       Roommates: 3
//     },
//     {
//       roomid: 2,
//       Admin: "Rohan Punde",
//       Roommates: 4
//     },
//     {
//       roomid: 3,
//       Admin: "Amit Kamat",
//       Roommates: 2
//     },
//     {
//       roomid: 4,
//       Admin: "Kalpesh Wagh",
//       Roommates: 5
//     },
//     {
//       roomid: 5,
//       Admin: "Pavan Patil",
//       Roommates: 6
//     }
//   ]);

//   return (
//     <div className='flex flex-col'>
//       <div>
//         <h2 className='m-4 font-semibold text-xl'>
//           Invitations
//         </h2>
//       </div>
//       <div className='h-96 mx-4 bg-white border border-gray-300 rounded-lg overflow-auto'>
//         {invitations.map((inv) => (
//           <div key={inv.roomid} className='flex justify-between items-center p-4 border-b border-gray-200'>
//             <div className="w-3/4">
//               <div className="font-semibold">Room ID: {inv.roomid}</div>
//               <div className="text-gray-600">Admin: {inv.Admin}</div>
//               <div className="text-gray-600">Roommates: {inv.Roommates}</div>
//             </div>
//             <div className='flex justify-center'>
//               <button className='p-2 bg-green-500 rounded-lg w-20'>Accept</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='m-auto p-2 rounded-lg bg-yellow-400 mt-8'>
//         <button>Find rooms in your area</button>
//       </div>
//     </div>
//   );
// };

// export default Invitation;

import React, { useState } from 'react';

const Invitation = () => {
  const [invitations, setInvitations] = useState([
    {
      roomid: 1,
      Admin: "Shubham Patil",
      Roommates: 3
    },
    {
      roomid: 2,
      Admin: "Rohan Punde",
      Roommates: 4
    },
    {
      roomid: 3,
      Admin: "Amit Kamat",
      Roommates: 2
    },
    {
      roomid: 4,
      Admin: "Kalpesh Wagh",
      Roommates: 5
    },
    {
      roomid: 5,
      Admin: "Pavan Patil",
      Roommates: 6
    }
  ]);

  return (
    <div className="flex flex-col h-screen">
      <div>
        <h2 className="m-4 font-semibold text-xl">
          Invitations
        </h2>
      </div>
      <div className="flex-1 mx-4 bg-white border border-gray-300 rounded-lg overflow-auto">
        {invitations.map((inv) => (
          <div key={inv.roomid} className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className="w-3/4">
              <div className="font-semibold">Room ID: {inv.roomid}</div>
              <div className="text-gray-600">Admin: {inv.Admin}</div>
              <div className="text-gray-600">Roommates: {inv.Roommates}</div>
            </div>
            <div className="flex justify-center">
              <button className="p-2 bg-green-500 rounded-lg w-20">Accept</button>
            </div>
          </div>
        ))}
      </div>
      <div className="m-auto p-2 rounded-lg bg-yellow-400 mt-8">
        <button>Find rooms in your area</button>
      </div>
    </div>
  );
};

export default Invitation;
