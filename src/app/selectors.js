import { createSelector } from "@reduxjs/toolkit";

export const selectorItems = (state) => state.users.users.items;
export const selectorIsLoading = (state) => state.users.users.isLoading;
export const selectorError = (state) => state.users.users.error;
export const selectorFilterName = (state) => state.filter.filterName;
export const selectorFilterUserName = (state) => state.filter.filterUserName;
export const selectorFilterEmail = (state) => state.filter.filterEmail;
export const selectorFilterPhone = (state) => state.filter.filterPhone;
export const selectorFilterCategory = (state) => state.filter.filterCategory;

export const selectorName = createSelector(
  selectorItems,
  selectorFilterName,
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
export const selectorUserName = createSelector(
  selectorItems,
  selectorFilterUserName,
  (items, filter) =>
    items.filter(({ username }) =>
      username.toLowerCase().includes(filter.toLowerCase())
    )
);
export const selectorEmail = createSelector(
  selectorItems,
  selectorFilterEmail,
  (items, filter) =>
    items.filter(({ email }) =>
      email.toLowerCase().includes(filter.toLowerCase())
    )
);
export const selectorPhone = createSelector(
  selectorItems,
  selectorFilterPhone,
  (items, filter) =>
    items.filter(({ phone }) =>
      phone.toLowerCase().includes(filter.toLowerCase())
    )
);
