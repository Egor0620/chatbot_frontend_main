/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

import { InjectedReducersType } from 'utils/types/injector-typings';
import { rootApi } from 'app/services/api';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return combineReducers({
      [rootApi.reducerPath]: rootApi.reducer,
    });
  } else {
    return combineReducers({
      ...injectedReducers,
      [rootApi.reducerPath]: rootApi.reducer,
    });
  }
}