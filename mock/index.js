export default [
  {
    url: "/api/getMenu",
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success'
      }
    }
  }
]