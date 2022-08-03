import { Flex, Box, Link as StyledLink, Image } from 'rebass/styled-components'
import { Link } from 'react-router-dom'
import { Container } from './Container'
import logo from './logo.svg'

export const NavBar = () => {
  return (
    <Flex bg={'#C0C0C0'} color='white' justifyContent='center'>
      <Container>
        <Flex px={2} width='100%' alignItems='center'>
          <Image size={20} src={logo} mr={2} />
          <StyledLink as={Link} variant='nav' to='/'>
            React Query CRUD
          </StyledLink>

          <Box mx='auto' my={4} />

          <StyledLink as={Link} variant='nav' to='/create-book'>
            + Add new book
          </StyledLink>
        </Flex>
      </Container>
    </Flex>
  )
}
