export const post = async ({request}) => {
  const data = await request.formData()
  console.table([...data.entries()])
}