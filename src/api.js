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

// Обновить книгу
export const updateBook = async ({ id, ...data }) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )

  return response.json()
}

// Получить книгу по айди
export const getBook = async ({ queryKey }) => {
  /* eslint-disable no-unused-vars */
  const [_key, { id }] = queryKey
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/books/${id}`
    )
    return response.data
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
