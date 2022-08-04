import { Box, Button } from 'rebass/styled-components'
import { Label, Input } from '@rebass/forms'
import { useForm } from 'react-hook-form'
import Spinner from '../Spinner'

export const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm({ defaultValues })

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor='title' mb={1}>
          Title
        </Label>
        <Input ref={register} id='title' name='title' type='text' required />
      </Box>

      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor='author' mb={1}>
          Author
        </Label>
        <Input ref={register} id='author' name='author' type='text' required />
      </Box>
      <Button>{isLoading ? <Spinner /> : 'Submit'}</Button>
    </form>
  )
}
