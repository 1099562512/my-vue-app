export default [
  {
    url: "/api/getMeun",
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success'
      }
    }
  }
]