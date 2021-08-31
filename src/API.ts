/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArtistCategoryInput = {
  id?: string | null,
  title: string,
};

export type ModelArtistCategoryConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelArtistCategoryConditionInput | null > | null,
  or?: Array< ModelArtistCategoryConditionInput | null > | null,
  not?: ModelArtistCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ArtistCategory = {
  __typename: "ArtistCategory",
  id: string,
  title: string,
  artist?: ModelArtistConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelArtistConnection = {
  __typename: "ModelArtistConnection",
  items?:  Array<Artist | null > | null,
  nextToken?: string | null,
};

export type Artist = {
  __typename: "Artist",
  id: string,
  name: string,
  image: string,
  songs?: ModelSongConnection | null,
  artistCategoryId: string,
  artistCategory?: ArtistCategory | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items?:  Array<Song | null > | null,
  nextToken?: string | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  uri: string,
  image: string,
  genre: string,
  creator: string,
  artistId: string,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateArtistCategoryInput = {
  id: string,
  title?: string | null,
};

export type DeleteArtistCategoryInput = {
  id: string,
};

export type CreateArtistInput = {
  id?: string | null,
  name: string,
  image: string,
  artistCategoryId: string,
};

export type ModelArtistConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  artistCategoryId?: ModelIDInput | null,
  and?: Array< ModelArtistConditionInput | null > | null,
  or?: Array< ModelArtistConditionInput | null > | null,
  not?: ModelArtistConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateArtistInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  artistCategoryId?: string | null,
};

export type DeleteArtistInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  uri: string,
  image: string,
  genre: string,
  creator: string,
  artistId: string,
};

export type ModelSongConditionInput = {
  uri?: ModelStringInput | null,
  image?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  creator?: ModelStringInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type UpdateSongInput = {
  id: string,
  uri?: string | null,
  image?: string | null,
  genre?: string | null,
  creator?: string | null,
  artistId?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type ModelArtistCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelArtistCategoryFilterInput | null > | null,
  or?: Array< ModelArtistCategoryFilterInput | null > | null,
  not?: ModelArtistCategoryFilterInput | null,
};

export type ModelArtistCategoryConnection = {
  __typename: "ModelArtistCategoryConnection",
  items?:  Array<ArtistCategory | null > | null,
  nextToken?: string | null,
};

export type ModelArtistFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  artistCategoryId?: ModelIDInput | null,
  and?: Array< ModelArtistFilterInput | null > | null,
  or?: Array< ModelArtistFilterInput | null > | null,
  not?: ModelArtistFilterInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  uri?: ModelStringInput | null,
  image?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  creator?: ModelStringInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type CreateArtistCategoryMutationVariables = {
  input: CreateArtistCategoryInput,
  condition?: ModelArtistCategoryConditionInput | null,
};

export type CreateArtistCategoryMutation = {
  createArtistCategory?:  {
    __typename: "ArtistCategory",
    id: string,
    title: string,
    artist?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        image: string,
        artistCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArtistCategoryMutationVariables = {
  input: UpdateArtistCategoryInput,
  condition?: ModelArtistCategoryConditionInput | null,
};

export type UpdateArtistCategoryMutation = {
  updateArtistCategory?:  {
    __typename: "ArtistCategory",
    id: string,
    title: string,
    artist?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        image: string,
        artistCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArtistCategoryMutationVariables = {
  input: DeleteArtistCategoryInput,
  condition?: ModelArtistCategoryConditionInput | null,
};

export type DeleteArtistCategoryMutation = {
  deleteArtistCategory?:  {
    __typename: "ArtistCategory",
    id: string,
    title: string,
    artist?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        image: string,
        artistCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArtistMutationVariables = {
  input: CreateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type CreateArtistMutation = {
  createArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    image: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        image: string,
        genre: string,
        creator: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistCategoryId: string,
    artistCategory?:  {
      __typename: "ArtistCategory",
      id: string,
      title: string,
      artist?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArtistMutationVariables = {
  input: UpdateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type UpdateArtistMutation = {
  updateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    image: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        image: string,
        genre: string,
        creator: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistCategoryId: string,
    artistCategory?:  {
      __typename: "ArtistCategory",
      id: string,
      title: string,
      artist?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArtistMutationVariables = {
  input: DeleteArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type DeleteArtistMutation = {
  deleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    image: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        image: string,
        genre: string,
        creator: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistCategoryId: string,
    artistCategory?:  {
      __typename: "ArtistCategory",
      id: string,
      title: string,
      artist?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    image: string,
    genre: string,
    creator: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      image: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      artistCategoryId: string,
      artistCategory?:  {
        __typename: "ArtistCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    image: string,
    genre: string,
    creator: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      image: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      artistCategoryId: string,
      artistCategory?:  {
        __typename: "ArtistCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    image: string,
    genre: string,
    creator: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      image: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      artistCategoryId: string,
      artistCategory?:  {
        __typename: "ArtistCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetArtistCategoryQueryVariables = {
  id: string,
};

export type GetArtistCategoryQuery = {
  getArtistCategory?:  {
    __typename: "ArtistCategory",
    id: string,
    title: string,
    artist?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        image: string,
        artistCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArtistCategoriesQueryVariables = {
  filter?: ModelArtistCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArtistCategoriesQuery = {
  listArtistCategories?:  {
    __typename: "ModelArtistCategoryConnection",
    items?:  Array< {
      __typename: "ArtistCategory",
      id: string,
      title: string,
      artist?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetArtistQueryVariables = {
  id: string,
};

export type GetArtistQuery = {
  getArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    image: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        image: string,
        genre: string,
        creator: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistCategoryId: string,
    artistCategory?:  {
      __typename: "ArtistCategory",
      id: string,
      title: string,
      artist?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArtistsQueryVariables = {
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArtistsQuery = {
  listArtists?:  {
    __typename: "ModelArtistConnection",
    items?:  Array< {
      __typename: "Artist",
      id: string,
      name: string,
      image: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      artistCategoryId: string,
      artistCategory?:  {
        __typename: "ArtistCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    image: string,
    genre: string,
    creator: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      image: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      artistCategoryId: string,
      artistCategory?:  {
        __typename: "ArtistCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items?:  Array< {
      __typename: "Song",
      id: string,
      uri: string,
      image: string,
      genre: string,
      creator: string,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        image: string,
        artistCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateArtistCategorySubscription = {
  onCreateArtistCategory?:  {
    __typename: "ArtistCategory",
    id: string,
    title: string,
    artist?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        image: string,
        artistCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArtistCategorySubscription = {
  onUpdateArtistCategory?:  {
    __typename: "ArtistCategory",
    id: string,
    title: string,
    artist?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        image: string,
        artistCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArtistCategorySubscription = {
  onDeleteArtistCategory?:  {
    __typename: "ArtistCategory",
    id: string,
    title: string,
    artist?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        image: string,
        artistCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArtistSubscription = {
  onCreateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    image: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        image: string,
        genre: string,
        creator: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistCategoryId: string,
    artistCategory?:  {
      __typename: "ArtistCategory",
      id: string,
      title: string,
      artist?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArtistSubscription = {
  onUpdateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    image: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        image: string,
        genre: string,
        creator: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistCategoryId: string,
    artistCategory?:  {
      __typename: "ArtistCategory",
      id: string,
      title: string,
      artist?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArtistSubscription = {
  onDeleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    image: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        image: string,
        genre: string,
        creator: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistCategoryId: string,
    artistCategory?:  {
      __typename: "ArtistCategory",
      id: string,
      title: string,
      artist?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    image: string,
    genre: string,
    creator: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      image: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      artistCategoryId: string,
      artistCategory?:  {
        __typename: "ArtistCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    image: string,
    genre: string,
    creator: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      image: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      artistCategoryId: string,
      artistCategory?:  {
        __typename: "ArtistCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    image: string,
    genre: string,
    creator: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      image: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      artistCategoryId: string,
      artistCategory?:  {
        __typename: "ArtistCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
