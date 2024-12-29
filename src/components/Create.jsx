import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../state/atoms/userAtom";
import { useNavigate } from "react-router-dom";
import { backendPath } from "../config";

const Create = () => {
  const [totalPeople, setTotalPeople] = useState([]);
  const [invitedPeople, setInvitedPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const user = useRecoilValue(userState)

  useEffect(() => {
    const fetchIdlePeople = async () => {
      try {
        // alert("trying")
        const token = localStorage.getItem('token')
        const response = await axios.get(`${backendPath}api/idlePeople`,{
          headers:{
            Authorization: token
          }
        });
        setTotalPeople(response.data.idlePeople); // Assuming `idlePeople` is an array of objects
      } catch (err) {
        console.error("Error fetching idle people:", err.message);
        setError("Failed to load idle people.");
      }
    };

    fetchIdlePeople();
  }, []);


  const handleCreate = async () => {
    try {
      // Ensure headers include the token
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User is not authenticated. Please log in.");
        return;
      }
      console.log(user.id)
      // Send the POST request to create a room
      const response = await axios.post(
        `${backendPath}api/rooms`,
        {
          members: invitedPeople.map((person) => person._id), // Collect all invited people IDs
          admin: user.id, // Set the admin user ID
        },
        {
          headers: {
            Authorization: token, // Attach the token in headers
          },
        }
      );
  
      // Handle success (you might want to redirect or display a success message)
      if(response.data.success){
      console.log("Room created successfully:", response.data);
      alert("Room created successfully!");
      setInvitedPeople([]); // Clear invited people after creating the room
      navigate("/home")
      }

    } catch (err) {
      // Handle errors
      console.error("Error creating room:", err.message);
      setError(err.response?.data?.message || "Failed to create the room.");
    }
  };
  

  // Filter people based on the search query
  const filteredPeople = totalPeople.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle inviting a person
  const handleInvite = (person) => {
    setInvitedPeople((prev) => [...prev, person]); // Add person to invitedPeople
    setTotalPeople((prev) => prev.filter((p) => p._id !== person._id)); // Remove person from totalPeople
  };

  // Handle removing a person from invitedPeople
  const handleRemove = (person) => {
    setTotalPeople((prev) => [...prev, person]); // Add person back to totalPeople
    setInvitedPeople((prev) => prev.filter((p) => p._id !== person._id)); // Remove person from invitedPeople
  };

  return (
    <div className="h-screen flex flex-col p-4 bg-gray-100">
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-4">Create a Room</h2>
        <div>
          <input
            type="text"
            className="h-7 border border-gray-300 rounded-lg px-2 py-5 w-full"
            placeholder="Search user by Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="h-44 overflow-auto mt-4 border-2 border-gray-300 bg-white rounded-lg">
            {filteredPeople.map((person) => (
              <div
                key={person._id}
                className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div className="w-3/4">
                    <strong>Name:</strong> {person.name} <br />
                    <strong>Email:</strong> {person.email}
                  </div>
                  <button
                    className="bg-green-400 rounded-md p-1.5"
                    onClick={() => handleInvite(person)}
                  >
                    Invite
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="font-semibold">Invited People</h2>
            <div className="h-44 overflow-auto mt-2 border-2 border-gray-300 bg-white rounded-lg">
              {invitedPeople.map((person) => (
                <div
                  key={person._id}
                  className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div className="w-3/4">
                      <strong>Name:</strong> {person.name} <br />
                      <strong>Email:</strong> {person.email}
                    </div>
                    <button
                      className="bg-red-600 rounded-md p-1.5 text-white"
                      onClick={() => handleRemove(person)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className="w-full lg:w-1/4 p-2 bg-amber-400 rounded-lg mx-auto" onClick={handleCreate}>
        Create Room
      </button>
    </div>
  );
};

export default Create;
