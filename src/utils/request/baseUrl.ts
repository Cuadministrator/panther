const getBaseUrl = (url: string) => {
  if (url.startsWith('http')) {
    return ''
  }
  return process.env.DUBAI_API
}

export default getBaseUrl
