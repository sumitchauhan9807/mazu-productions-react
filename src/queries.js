import { gql } from "@apollo/client";

export const GET_ALL_MEDIA_BY_CATEGORY = gql`
  query {
    getAllMediaByCategory {
      id
      title
      thumbnail
      mediaCategory
    }
  }
`;

export const GET_MEDIA_BY_CATEGORY = gql`
  query getMediaByCategory($category: String!) {
    getMediaByCategory(category: $category) {
      id
      url
      title
      description
      preview_url
      thumbnail
      potrait
    }
  }
`;

export const GET_ALL_ACTOR_WEB_VIDEOS = gql`
  query getAllActorWebVideos($id: String!) {
    getAllActorWebVideos(id: $id) {
      id
      source
      cover
      name
      updates {
        id
        earnings
        views
        bonus
      }
    }
  }
`;

export const STRIP_CHAT_DATA = gql`
  query stripChatAPI($id: String!) {
    stripChatData(id: $id) {
      earnings {
        id
        startDate
        endDate
        totalEarnings
        isPaid
      }
      actor {
        username
      }
    }
  }
`;

export const STRIPCHAT_PAYOUTS = gql`
  query actorStripchatPayouts($id: String!) {
    actorStripchatPayouts(id: $id) {
      actor {
        username
      }
      payouts {
        id
        amount
        managerShare
        companyShare
        actorShare
        source
        actor {
          username
        }
        recuiter {
          username
        }
        manager {
          username
        }
        recuiterShare
      }
    }
  }
`;

export const GET_MODEL_BY_CATEGORY = gql`
  query getModelByCategory($preference: String!) {
    getModelByCategory(preference: $preference) {
      id
      username
      usrType
      profilePic
      looks {
        preference
      }
    }
  }
`;

export const GET_MODEL_DEFAULT_GALLERY = gql`
  query getModelDefaultGallery {
    getModelDefaultGallery {
      id
      name
      media {
        id
        cloudUrl
        format
      }
    }
  }
`;

export const GET_ACTOR_META = gql`
  query getActorMeta($id: String!) {
    getActorMeta(id: $id) {
      username
      actorMeta {
        stripChatUsername
        stripChatCompanyShare
        stripChatRecuiterShare
        stripChatActorShare
        stripChatManagerShare
      }
    }
  }
`;

export const UPDATE_ACTOR_META = gql`
  mutation UpdateActorMeta(
    $stripChatUsername: String!
    $id: String!
    $stripChatCompanyShare: Float
    $stripChatRecuiterShare: Float
    $stripChatActorShare: Float
    $stripChatManagerShare: Float
  ) {
    UpdateActorMeta(
      stripChatUsername: $stripChatUsername
      id: $id
      stripChatCompanyShare: $stripChatCompanyShare
      stripChatRecuiterShare: $stripChatRecuiterShare
      stripChatActorShare: $stripChatActorShare
      stripChatManagerShare: $stripChatManagerShare
    ) {
      actorMeta {
        stripChatUsername
        stripChatCompanyShare
        stripChatRecuiterShare
        stripChatActorShare
        stripChatManagerShare
      }
    }
  }
`;

export const USER_REGISTER = gql`
  mutation register(
    $options: UsernamePasswordInput!
    $addr: String!
    $userType: String!
    $preference: String!
    $modelData: ModelRegisterFields
    $modelAff: String
  ) {
    register(
      options: $options
      addr: $addr
      userType: $userType
      preference: $preference
      modelData: $modelData
      modelAff: $modelAff
    ) {
      errors {
        field
        message
      }
      user {
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
        user_basic {
          location
        }
      }
      credit {
        id
        balance
        flirtons
        flirtonsAvailable
      }
      token
    }
  }
`;

export const UPDATE_PROFILE_PIC = gql`
  mutation updateProfilePic($file: Upload!) {
    updateProfilePic(file: $file)
  }
`;

export const RELEASE_STRIPCHAT_PAYMENT = gql`
  mutation releaseStripchatPayment(
    $id: String!
    $startDate: DateTime!
    $endDate: DateTime!
  ) {
    releaseStripchatPayment(id: $id, startDate: $startDate, endDate: $endDate) {
      payout {
        id
        amount
      }
      paidEarnings {
        id
        totalEarnings
      }
    }
  }
`;

export const CREATE_TEAM = gql`
  mutation createTeam($name: String!) {
    createTeam(name: $name) {
      name
      recuiter {
        id
      }
      manager {
        id
      }
    }
  }
`;
export const GET_CLOUD_PUT_URL = gql`
  query getCloudPutUrl(
    $filename: String!
    $mimetype: String!
    $bucket: String
  ) {
    getCloudPutUrl(filename: $filename, mimetype: $mimetype, bucket: $bucket)
  }
`;
export const ADD_MODEL_GALLERY_MEDIA = gql`
  mutation addModelMedia(
    $cost: Float!
    $is_paid: Boolean!
    $mediaCloudName: String!
    $mimetype: String!
  ) {
    addModelMedia(
      cost: $cost
      is_paid: $is_paid
      mediaCloudName: $mediaCloudName
      mimetype: $mimetype
    ) {
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
    $name: String!
    $cover: String!
  ) {
    addWebVideo(source: $source, id: $id, name: $name, cover: $cover) {
      id
      source
    }
  }
`;

export const BASIC_SELCETIONS = gql`
  query {
    basicInfoSelections {
      hairColorTypes
      genders
      preferences
    }
  }
`;

export const GET_ALL_TEAMS = gql`
  query {
    getAllTeams {
      id
      name
      admin {
        id
        username
        name
      }
    }
  }
`;

export const GET_TEAM_MANAGERS = gql`
  query getTeamManagers($id: String!) {
    getTeamManagers(id: $id) {
      manager {
        id
        username
        name
        email
      }
      team {
        name
      }
    }
  }
`;

export const GET_TEAM_ADMINS = gql`
  query getAllTeamManagers {
    getAllTeamManagers {
      id
      username
      name
      email
    }
  }
`;

export const GET_MANAGER_RECUITERS = gql`
  query getManagerRecuiters($id: String!) {
    getManagerRecuiters(id: $id) {
      recuiter {
        id
        username
        name
        email
      }
      manager {
        name
        username
      }
    }
  }
`;

export const ADD_MANAGER = gql`
  mutation addManager(
    $name: String!
    $password: String!
    $email: String!
    $team: String!
    $username: String!
  ) {
    addManager(
      name: $name
      password: $password
      email: $email
      team: $team
      username: $username
    ) {
      id
      username
      email
    }
  }
`;

export const ADD_TEAM_ADMIN = gql`
  mutation addTeamAdmin(
    $name: String!
    $password: String!
    $email: String!
    $username: String!
  ) {
    addTeamAdmin(
      name: $name
      password: $password
      email: $email
      username: $username
    ) {
      id
      username
      email
    }
  }
`;

export const UPDATE_TEAM_ADMIN = gql`
  mutation updateTeamAdmin($teamId: String!, $adminId: String!) {
    updateTeamAdmin(teamId: $teamId, adminId: $adminId)
  }
`;

export const ADD_RECUITER = gql`
  mutation addRecuiter(
    $name: String!
    $password: String!
    $email: String!
    $manager: String!
    $username: String!
  ) {
    addRecuiter(
      name: $name
      password: $password
      email: $email
      manager: $manager
      username: $username
    ) {
      id
      username
      email
    }
  }
`;

export const GET_ALL_ACTORS = gql`
  query {
    getAllActors {
      id
      username
      profilePic
      recuiter {
        username
      }
    }
  }
`;
export const ADD_BASIC_INFO = gql`
  mutation addBasicInformation($options: BasicInfoInput!) {
    addBasicInformation(options: $options)
  }
`;
export const VERIFY_OTP = gql`
  mutation verifyOtp($otp: String!, $MP: Boolean) {
    verifyOtp(otp: $otp, MP: $MP) {
      user {
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
        user_basic {
          location
        }
      }
      credit {
        id
        balance
        flirtons
        flirtonsAvailable
      }
    }
  }
`;
export const USER_LOGIN = gql`
  mutation login(
    $usernameOrEmail: String!
    $password: String!
    $addr: String!
  ) {
    login(usernameOrEmail: $usernameOrEmail, password: $password, addr: $addr) {
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
        user_basic {
          location
        }
      }
      credit {
        id
        balance
        flirtons
        flirtonsAvailable
      }
    }
  }
`;
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

export const GET_ACTOR_MEDIA_ADMIN = gql`
  query getActorMediaById($id: String!) {
    getActorMediaById(id: $id) {
      mediaGallery {
        id
        name
        media {
          url
          mediaCategory
          format
          cloudUrl
        }
      }
      user {
        username
      }
    }
  }
`;

export const ADD_WEB_VIDEO_UPDATE = gql`
  mutation addWebVideoUpdate(
    $id: String!
    $earnings: String!
    $bonus: String
    $earnigDate: DateTime
    $views: String!
  ) {
    addWebVideoUpdate(
      id: $id
      earnings: $earnings
      bonus: $bonus
      earnigDate: $earnigDate
      views: $views
    ) {
      id
      earnings
    }
  }
`;

export const GET_WEB_VIDEO = gql`
  query getWebVideo($id: String!) {
    getWebVideo(id: $id) {
      video {
        id
        name
      }
      updates {
        id
        earnings
        views
        bonus
        earningDate
        isPaid
      }
    }
  }
`;
export const UPDATE_WEB_VIDE_UPDATE = gql`
  mutation updateWebVideoUpdate(
    $id: String!
    $earnings: String!
    $bonus: String!
    $views: String!
  ) {
    updateWebVideoUpdate(
      id: $id
      earnings: $earnings
      bonus: $bonus
      views: $views
    )
  }
`;

export const RELEASE_VIDEO_PAYMENT = gql`
  mutation releaseVideoPayment(
    $videoId: String!
    $startDate: DateTime!
    $endDate: DateTime!
  ) {
    releaseVideoPayment(
      videoId: $videoId
      startDate: $startDate
      endDate: $endDate
    ) {
      payout {
        id
        recuiter {
          username
        }
        source
      }
    }
  }
`;

export const GET_ACTOR_PAYOUTS = gql`
  query getActorPayouts{
    getActorPayouts{
      id
      source
    }
  }
`;