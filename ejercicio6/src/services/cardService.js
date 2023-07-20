export async function getCards(page) {
   
    const p = JSON.stringify(page)
   
    URL: 'https://rickandmortyapi.com/api/character/?page='
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${p}`)
    console.log(response)
  
    const data = await response.json()
    return data

}