import {
  Flex,
  Text,
  Button,
  Link as StyledLink,
} from 'rebass/styled-components'
import { Link } from 'react-router-dom'

export const BookItem = ({ author, title, id }) => {
  return (
    <Flex p={3} width='100%' alignItems='center'>
      <StyledLink 
        as={Link}
        variant='nav' 
        to={`/update-book/${id}`}
        mr="auto"
      >
        {title}
      </StyledLink>

      <Text>{author}</Text>

      <Button ml={5}>Remove</Button>
    </Flex>
  )
}
