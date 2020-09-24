export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=T6xORNTNlPCjsuwOP9wq68DiNp0s4I59`;
  const resp = await fetch ( url );
  const {data} = await resp.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs;
}