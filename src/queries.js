import { gql } from '@apollo/client';

export const GET_ALL_MEDIA_BY_CATEGORY = gql`
query{
  getAllMediaByCategory{
    id
    title
    thumbnail
    mediaCategory
  }
}`


export const GET_MEDIA_BY_CATEGORY = gql`
query getMediaByCategory($category:String!){
  getMediaByCategory(category:$category){
    id
    url
    title
    description
    preview_url
    thumbnail
    potrait
  }
}

`