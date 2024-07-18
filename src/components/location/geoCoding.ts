export const getAddress = async (lat: number, lng:number): Promise<string> => {
    const api = "9f1c039362d8440e89e1961379af56a3"
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${api}`)
    const data = await response.json()

    if(data.results && data.results.length > 0){
        return data.results[0].formatted
    } else {
        return ("Address Not Found!!")
    }
}