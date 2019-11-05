import axios from 'axios';
import qs from "qs";

class instance{
  constructor(config = {

  }){
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(this.request, this.requestError);
    this.instance.interceptors.response.use(this.response, this.responseError);
  }

  request(request){
    if (request.headers["Content-Type"] == "multipart/form-data") {
      return request;
    }
    // if (request.method == "post") {
    //   request.data = qs.stringify(request.data);
    //   console.log(request, 'request');
    //   return request;
    // }

    return request;
  }

  requestError(error){
    // console.log(error, 'requestError')
  }

  response(response){
    // console.log(response, 'response');
    return response.data;
  }

  responseError(error){
    // console.log(error, 'responseError')
  }

  get(url, params){
    return this.instance.get(url, params);
  }

  post(url, data = {}, config = {}){
    return this.instance.post(url, data, config);
  }

}
export default new instance();