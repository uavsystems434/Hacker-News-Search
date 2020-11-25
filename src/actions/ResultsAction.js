import axios from 'axios';

export const getResults = (query) => {
  return (dispatch) => {
      return axios.get("http://hn.algolia.com/api/v1/search?query=" + query).then((response)=>{
          console.log(response)
          const results = response.data.hits
          dispatch({type: 'GET_RESULTS',  results });
      })
  }
}

