import { initialStoreDataStatus } from "constants/initialStoreDataStatus";
import { AlbumsActions, AlbumsActionTypes, AlbumsState } from "./types";

export const initialAlbumsState: AlbumsState = {
  albums: {
    data: null,
    ...initialStoreDataStatus,
  },
};

export function albums(
  state = initialAlbumsState,
  action: AlbumsActionTypes,
): AlbumsState {
  switch (action.type) {
    case AlbumsActions.FETCH_ALBUMS_REQUEST:
      return {
        ...state,
        albums: {
          ...state.albums,
          fetching: true,
          error: null,
        },
      };
    case AlbumsActions.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: {
          data: action.payload,
          fetching: false,
          error: null,
        },
      };
    case AlbumsActions.FETCH_ALBUMS_ERROR:
      return {
        ...state,
        albums: {
          data: null,
          fetching: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}
