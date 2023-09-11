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
}`

export const GET_MODEL_BY_CATEGORY = gql`
query getModelByCategory($preference:String!){
  getModelByCategory(preference:$preference){
    id
    username
    usrType
    profilePic
    looks{
      preference
    }
  }
}`

export const USER_REGISTER = gql `
    mutation register($options:UsernamePasswordInput!,$addr: String!,$userType:String!,$preference:String!,$modelData:ModelRegisterFields){
        register(options:$options, addr:$addr,userType:$userType,preference:$preference,modelData:$modelData){
            errors{
                field
                message
            }
            user{
              profilePic
                username
                email
                usrType
                profileSetupStep
                profileComplete
                photos {
                    id
                    image
                    unsafe
                }
                base_profile {
                    id
                    firstName
                    lastName
                }
                user_basic{
                  location
                }
            }
            credit{
                id
                balance
                flirtons
                flirtonsAvailable
            }
            token
        }
    }
`