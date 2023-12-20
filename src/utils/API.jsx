class API {
  #placeholderURL = "https://jsonplaceholder.typicode.com/";
  #dummyURL = "https://dummyjson.com/quotes/random";
  #getPromise = async (address) => {
    const data = await fetch(`${address}`).then((res) => {
      if (!res.ok) {
        throw new Response("", {
          status: res.status,
          statusText: "Page not found"
        });
      } else {
        return res.json();
      }
    });
    return data;
  };

  getUsers = async (website = this.#placeholderURL) => {
    const users = await this.#getPromise(`${website}/users`);
    return users;
  };

  getUser = async (id, website = this.#placeholderURL) => {
    const user = await this.#getPromise(`${website}/users/${id}`);
    return user;
  };

  getAlbums = async (website = this.#placeholderURL) => {
    const albums = await this.#getPromise(`${website}/albums`);
    return albums;
  };

  getAlbum = async (id, website = this.#placeholderURL) => {
    const album = await this.#getPromise(`${website}/albums/${id}`);
    return album;
  };

  getUserAlbums = async (id, website = this.#placeholderURL) => {
    const userAlbums = await this.#getPromise(`${website}/users/${id}/albums`);
    return userAlbums;
  };

  getPhotos = async (id, website = this.#placeholderURL) => {
    const photos = await this.#getPromise(`${website}/albums/${id}/photos`);
    return photos;
  };
  getQuote = async (website = this.#dummyURL) => {
    const quote = await this.#getPromise(website);
    return quote;
  };
}

export { API };
