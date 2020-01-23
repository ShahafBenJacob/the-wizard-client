import fetcher from './fetcher';

export const getData = async (type) => {
    try {
      const response = await fetcher.get(`/${type}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  export const postData = async (type) => {
    try {
      const response = await fetcher.post(`/${type}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  export const updateData = async (type) => {
    try {
      const response = await fetcher.put(`/${type}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

