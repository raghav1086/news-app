export default {
  getSortedData(data) {
    let result
    if (data) {
      result = data.sort((a, b) => {
        let dateA = new Date(a.publishedAt).getHours()
        let dateB = new Date(b.publishedAt).getHours()
        if (dateA < dateB) return -1
        if (dateA > dateB) return 1
        return 0
      })
    } else {
      result = data
    }

    return result
  },
}
