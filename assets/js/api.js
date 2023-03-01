async function fetchPrifileDate() {
    const url = 'https://raw.githubusercontent.com/sdeoliveira-r/portfolio/master/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}


//https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json