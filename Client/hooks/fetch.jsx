import axios from 'axios';


async function FetchRandomUsers() {
  const { data } = await axios.get('http://localhost:4000/')
  return data
}


export default FetchRandomUsers;