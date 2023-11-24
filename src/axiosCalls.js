import axios from "axios";

const baseUrl = "https://pollsapp-36x1.onrender.com/api/polls"; // Change this to the appropriate base URL

// Create a poll
const createPoll = async (pollData) => {
  try {
    const response = await axios.post(`${baseUrl}/create`, pollData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get all polls
const getAllPolls = async () => {
  try {
    const response = await axios.get(`${baseUrl}/all`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get a single poll by ID
const getSinglePoll = async (pollId) => {
  try {
    const response = await axios.get(`${baseUrl}/${pollId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update a poll by ID
const updatePoll = async (pollId, updateData) => {
  try {
    const response = await axios.put(`${baseUrl}/${pollId}`, updateData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Delete a poll by ID
const deletePoll = async (pollId) => {
  try {
    const response = await axios.delete(`${baseUrl}/${pollId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Vote on a poll by ID
const voteOnPoll = async (pollId, registrationCode, voteData) => {
  try {
    const response = await axios.post(
      `https://pollsapp-36x1.onrender.com/auth/${pollId}/vote`,
      {
        registrationCode,
        vote: voteData,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Register for a poll
const registerForPoll = async (email) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const axiosCalls = { voteOnPoll, getAllPolls, getSinglePoll };
export default axiosCalls;
