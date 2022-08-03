import axios from 'axios'

async function getAllBooks() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/books`
    )
    console.log(response)
    const data = response.data
    console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}

export default getAllBooks
