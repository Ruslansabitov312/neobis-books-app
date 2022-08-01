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
          <Link element={StyledLink} variant='nav' to='/'>
            React Query CRUD
          </Link>

          <Box mx='auto' my={4} />

          <Link element={StyledLink} variant='nav' to='/create-book'>
            + Add new book
          </Link>
        </Flex>
      </Container>
    </Flex>
  )
}
