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



export const GET_ALL_ACTOR_WEB_VIDEOS = gql`
query getAllActorWebVideos($id:String!){
  getAllActorWebVideos(id:$id){
    id
    source
    cover
    name
    updates{
      id
      amount
      views
    }
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

export const GET_MODEL_DEFAULT_GALLERY = gql`
query getModelDefaultGallery{
  getModelDefaultGallery{
    id
    name
    media{
      id
      cloudUrl
      format
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

export const UPDATE_PROFILE_PIC = gql `mutation updateProfilePic($file: Upload!) {
  updateProfilePic(file: $file)
}
`
export const GET_CLOUD_PUT_URL = gql`
  query getCloudPutUrl($filename: String!,$mimetype:String!,$bucket:String) {
    getCloudPutUrl(filename: $filename,mimetype:$mimetype,bucket:$bucket) 
  }
`;
export const ADD_MODEL_GALLERY_MEDIA = gql`
  mutation addModelMedia(
    $cost: Float!
    $is_paid: Boolean!
    $mediaCloudName:String!
    $mimetype:String!
  ) {
    addModelMedia(
      cost: $cost
      is_paid: $is_paid
      mediaCloudName:$mediaCloudName
      mimetype:$mimetype
    ){
       id
       url
       cost
       format
       mediaCloudName
       format
       is_paid
       cloudUrl
     }
  }
`;

export const ADD_MODEL_WEB_VIDEO = gql`
  mutation addWebVideo(
    $source: String!
    $id: String!
    $name:String!
    $cover:String!
  ) {
    addWebVideo(
      source: $source
      id: $id
      name:$name
      cover:$cover
    ){
       id
       source
     }
  }
`;

export const BASIC_SELCETIONS = gql `query{
  basicInfoSelections{
    hairColorTypes
    genders
    preferences
  }
}`

export const GET_ALL_ACTORS = gql`query{
  getAllActors{
    id
    username
    profilePic
  }
}`
export const ADD_BASIC_INFO = gql `mutation addBasicInformation($options:BasicInfoInput!){
  addBasicInformation(options:$options)
}`
export const VERIFY_OTP = gql `mutation verifyOtp($otp:String!,$MP:Boolean){
  verifyOtp(otp:$otp,MP:$MP){
      user{            
          profilePic
          username
          email
          age
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
  }
}`
export const USER_LOGIN = gql `
mutation login($usernameOrEmail: String!, $password: String!, $addr: String!) {
    login(usernameOrEmail: $usernameOrEmail, password: $password, addr:$addr) {
        errors {
            field
            message
        }
        token
        user {
            authSource
            profilePic
            username
            email
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
    }
}
`
export const MOD_QUERY = gql`
  mutation modLogin(
    $password: String!
    $pin: String!
    $datingCommunity: String!
  ) {
    modLogin(
      password: $password
      pin: $pin
      datingCommunity: $datingCommunity
    ) {
      token
      domain
      moderator {
        id
        active
        status
        pin
        accountType
      }
    }
  }
`;