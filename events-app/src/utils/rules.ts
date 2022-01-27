export const rules = {
  required: (message: string = 'The field is required!') => ({
    required: true,
    message
  })
}
