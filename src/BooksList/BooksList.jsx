import { Container } from '../shared/Container'
import { Flex } from 'rebass/styled-components'
import { useQuery } from 'react-query'
import { TailSpin } from 'react-loader-spinner'
import { getAllBooks } from '../api'
import { BookItem } from './BookItem'

export const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery('books', getAllBooks)

  if (isLoading) {
    return (
      <Container>
        <Flex py={5} justifyContent='center'>
          <TailSpin color='#00BFFF' height={80} width={80} />
        </Flex>
      </Container>
    )
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <Container>
      <Flex flexDirection='column' alignItems='center'>
        {data.map(({ author, title, id }) => (
          <BookItem author={author} title={title} key={id} id={id} />
        ))}
      </Flex>
    </Container>
  )
}
