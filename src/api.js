const serverBaseUrl = 'http://localhost:8080'
const baseUrl = `${serverBaseUrl}/api/v1/car-info`

export default {
    getCars(number) {
        return fetch(`${baseUrl}/${number}`)
    }
}