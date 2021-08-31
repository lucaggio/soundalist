/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtistCategory = /* GraphQL */ `
  query GetArtistCategory($id: ID!) {
    getArtistCategory(id: $id) {
      id
      title
      artist {
        items {
          id
          name
          image
          artistCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listArtistCategories = /* GraphQL */ `
  query ListArtistCategories(
    $filter: ModelArtistCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtistCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        artist {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      name
      image
      songs {
        items {
          id
          uri
          image
          genre
          creator
          artistId
          createdAt
          updatedAt
        }
        nextToken
      }
      artistCategoryId
      artistCategory {
        id
        title
        artist {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        songs {
          nextToken
        }
        artistCategoryId
        artistCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      uri
      image
      genre
      creator
      artistId
      artist {
        id
        name
        image
        songs {
          nextToken
        }
        artistCategoryId
        artistCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uri
        image
        genre
        creator
        artistId
        artist {
          id
          name
          image
          artistCategoryId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
