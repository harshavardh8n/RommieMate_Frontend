import React, { useState } from "react";

const Create = () => {
  const [totalPeople, setTotalPeople] = useState([
    "Shubham Shinde",
    "Kalpesh Wagh",
    "Amit Kamat",
    "Rohan Punde",
    "Pavan Patil",
  ]);

  const [invitedPeople, setInvitedPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter people based on the search query
  const filteredPeople = totalPeople.filter((person) =>
    person.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle inviting a person
  const handleInvite = (person) => {
    setInvitedPeople((prev) => [...prev, person]); // Add person to invitedPeople
    setTotalPeople((prev) => prev.filter((p) => p !== person)); // Remove person from totalPeople
  };

  // Handle removing a person from invitedPeople
  const handleRemove = (person) => {
    setTotalPeople((prev) => [...prev, person]); // Add person back to totalPeople
    setInvitedPeople((prev) => prev.filter((p) => p !== person)); // Remove person from invitedPeople
  };

  return (
    <div className="h-screen flex flex-col p-4 bg-gray-100">
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-4">Create a Room</h2>
        <div>
          <div>
            <input
              type="text"
              className="h-7 border border-gray-300 rounded-lg px-2 py-5 w-full"
              placeholder="Search user by Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="h-44 overflow-auto mt-4 border-2 border-gray-300 bg-white rounded-lg">
            {filteredPeople.map((person, index) => (
              <div
                key={index}
                className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div className="w-3/4">{person}</div>
                  <div>
                    <button
                      className="bg-green-400 rounded-md p-1.5"
                      onClick={() => handleInvite(person)}
                    >
                      Invite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="font-semibold">Invited People</h2>
            <div className="h-44 overflow-auto mt-2 border-2 border-gray-300 bg-white rounded-lg">
              {invitedPeople.map((person, index) => (
                <div
                  key={index}
                  className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div className="w-3/4">{person}</div>
                    <div>
                      <button
                        className="bg-red-600 rounded-md p-1.5 text-white"
                        onClick={() => handleRemove(person)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-full lg:w-1/4 p-2 bg-amber-400 rounded-lg mx-auto">
          Create Room
        </button>
      </div>
    </div>
  );
};

export default Create;
