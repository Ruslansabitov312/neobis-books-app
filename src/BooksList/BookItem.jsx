import {
  Flex,
  Text,
  Button,
  Link as StyledLink,
} from 'rebass/styled-components'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import { removeBook } from '../api'
import { ThreeDots } from 'react-loader-spinner'

export const BookItem = ({ author, title, id }) => {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation(removeBook)

  const remove = async () => {
    await mutateAsync(id)
    queryClient.invalidateQueries('books')
  }

  return (
    <Flex p={3} width='100%' alignItems='center'>
      <StyledLink as={Link} variant='nav' to={`/update-book/${id}`} mr='auto'>
        {title}
      </StyledLink>

      <Text>{author}</Text>

      <Button cursor='pointer' ml={5} onClick={remove}>
        {isLoading ? (
          <ThreeDots color='#F08080' height={15} width={57} />
        ) : (
          'remove'
        )}
      </Button>
    </Flex>
  )
}
