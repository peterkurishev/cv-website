const dependency = 'test'

export const handler = async function(event, context) {
  const value = await import(dependency)
  return { statusCode: 200, body: String(value) }
}
