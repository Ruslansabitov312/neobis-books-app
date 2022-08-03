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
          <Link to='/'>
            <StyledLink variant={'nav'} color='white'>React Query CRUD1</StyledLink>
          </Link>

          <Box mx='auto' my={4} />

          <Link to='/create-book'>
            <StyledLink variant={'nav'} color='white'>+ Add new book</StyledLink>
          </Link>
        </Flex>
      </Container>
    </Flex>
  )
}
