import axios from 'axios';
import {useEffect, useState} from 'react'
const Hooks = () => {
  const useAxios = () => {
    const Get = () => {
        const fetchData = async (url) => {
          try {
            const response = await axios.get(url); // Make the API request
            return response.data; // Update state with fetched data
          } catch (err) {
            return err.message; // Capture error
          }
        };

      return { fetchData };
    }
// ------------------------------------------------------------------------/////
    const Post = () => {
      const postData = async (url, payload) => {
        try {
          const response = await axios.post(url, payload); // Make the API request
          return await response.data // Update state with fetched data
        } catch (err) {
          return err.message // Capture error
        }
      };
      return { postData };
    }
    return { Get, Post};
  }
  return { useAxios }
}

export default Hooks;



