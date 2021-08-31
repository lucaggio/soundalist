/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArtistCategory = /* GraphQL */ `
  mutation CreateArtistCategory(
    $input: CreateArtistCategoryInput!
    $condition: ModelArtistCategoryConditionInput
  ) {
    createArtistCategory(input: $input, condition: $condition) {
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
export const updateArtistCategory = /* GraphQL */ `
  mutation UpdateArtistCategory(
    $input: UpdateArtistCategoryInput!
    $condition: ModelArtistCategoryConditionInput
  ) {
    updateArtistCategory(input: $input, condition: $condition) {
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
export const deleteArtistCategory = /* GraphQL */ `
  mutation DeleteArtistCategory(
    $input: DeleteArtistCategoryInput!
    $condition: ModelArtistCategoryConditionInput
  ) {
    deleteArtistCategory(input: $input, condition: $condition) {
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
export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
