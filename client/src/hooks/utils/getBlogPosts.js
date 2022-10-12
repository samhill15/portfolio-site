import Papa from 'papaparse'

const parseSheets = () => new Promise((resolve) =>{
    Papa.parse(process.env.REACT_APP_SHEETS_LINK, {
      download: true,
      header: true,
      newline: '',
      complete: (res, file) => {
        resolve(res.data)
      }
    })
  })

const getBlogPosts = async () => {
    return await parseSheets()
}

export default getBlogPosts