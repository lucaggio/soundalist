/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtistCategory = /* GraphQL */ `
  subscription OnCreateArtistCategory {
    onCreateArtistCategory {
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
export const onUpdateArtistCategory = /* GraphQL */ `
  subscription OnUpdateArtistCategory {
    onUpdateArtistCategory {
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
export const onDeleteArtistCategory = /* GraphQL */ `
  subscription OnDeleteArtistCategory {
    onDeleteArtistCategory {
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
export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist {
    onCreateArtist {
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
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist {
    onUpdateArtist {
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
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist {
    onDeleteArtist {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
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
