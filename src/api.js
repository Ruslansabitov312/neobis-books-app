import axios from 'axios'

// Получить книги
export const getAllBooks = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/books`
    )
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
  }
}

// Удалить книгу
export const removeBook = async (id) => {
  try {
    await axios.delete(`${process.env.REACT_APP_API_SERVER}/books/${id}`)
    return true
  } catch (error) {
    console.error(error)
  }
}

// export const removeBook = async (id) => {
//   const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`, {
//     method: 'DELETE'
//   })

//   if(!response.ok) {
//     throw new Error(response.json().message)
//   }
//   return true
// }
