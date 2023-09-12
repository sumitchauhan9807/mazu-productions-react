
import { GET_CLOUD_PUT_URL } from 'queries'
import {apolloClient} from 'index'
import axios from 'axios'
export const uploadToCloud = async (file,progressCallback) => {
  try {
    
    let mimeType = file.type
    let name = makeId(5)+'_'+ file.name
    console.log(file);
    console.log(name)
    const { data, errors } = await apolloClient.query({
    query: GET_CLOUD_PUT_URL,
    variables: {
      filename: name,
      mimetype: mimeType,
    },
  });
  let putUrl = data.getCloudPutUrl
  let uploadProgress
  // console.log(putUrl,"putUrlputUrlputUrl")
  // return putUrl
    return new Promise((resolve,reject)=>{
        axios.request({
          method: "PUT", 
          url: putUrl, 
          data: file, 
          // headers_list:['Content-Type:video/mp4'],
          headers:{
            'Content-Type':mimeType
          },
          onUploadProgress: (p) => {
            // console.log(p); 
            // console.log(Math.ceil(p.loaded/p.total * 100))
            uploadProgress = Math.ceil(p.loaded/p.total * 100)
            // console.log(uploadProgress)
            progressCallback(uploadProgress)
            // document.getElementById('progress').innerHTML = `${Math.ceil(p.progress * 100)}  %`
            //this.setState({
                //fileprogress: p.loaded / p.total
            //})
          }
        }).then (data => {
          console.log(data)
          uploadProgress = 0
            resolve({
              filename:name,
              mimetype:mimeType
            })
        }).catch((e)=>{
          uploadProgress = 0
          reject(e)
        })
    })
  }catch(e) {
    console.log(e)
  }
}

function makeId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}