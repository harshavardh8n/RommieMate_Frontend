import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { backendPath } from '../config';
import { roomIdAtom } from '../state/atoms/roomIdAtom';

const Roommates = () => {
    // Get roomId from recoil state
    const roomId = useRecoilValue(roomIdAtom);

    // State to hold the list of roommates
    const [Roommates, setRoommates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch roommates
    const getRoommates = async () => {
        try {
            const token = localStorage.getItem('token');  // Corrected localStorage reference
            if (!token) {
                setError("No token found.");
                setLoading(false);
                return;
            }
 
            const response = await axios.get(`${backendPath}api/room`, {
                headers: {  
                    Authorization: token // Ensure token is prefixed with 'Bearer'
                }
            });

            if (response.status === 200) {
                setError(false)
                setRoommates(response.data.members); // Set the state with fetched data
            }
        } catch (err) {
            setError("Failed to fetch roommates.");
        } finally {
            setLoading(false);  // Stop loading once data is fetched
            
        }
    };

    // Fetch the roommates when the component mounts
    useEffect(() => {
        getRoommates();
    }, [roomId]);  // Dependency array ensures the effect runs when roomId changes

    return (
        <div className="border-t-gray-300">
            {/* Loading and Error Handling */}
            {/* {loading && <p>Loading roommates...</p>} */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Roommates List */}
            <h1 class="text-xl font-semibold ml-24 mt-7 mb-5 text-[#809539]">Room Mates</h1>
            <div className="w-3/5 m-auto flex flex-col gap-1">
                {loading? <p>Loading roommates...</p>: Roommates.map((roomie) => (
                    <div key={roomie._id} className="p-2 border-b border-gray-200 bg-white">
                        {roomie.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roommates;
