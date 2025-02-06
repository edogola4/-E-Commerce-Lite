// actions.js

// UI Actions
export const TOGGLE_THEME = 'TOGGLE_THEME' // Light/dark mode
export const SIDEBAR_OPEN = 'SIDEBAR_OPEN'
export const SIDEBAR_CLOSE = 'SIDEBAR_CLOSE'
export const SET_GRID_VIEW = 'SET_GRID_VIEW'
export const SET_LIST_VIEW = 'SET_LIST_VIEW'
export const SET_GALLERY_VIEW = 'SET_GALLERY_VIEW' // For featured items

// Product Actions
export const GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR'
export const GET_RECOMMENDATIONS_BEGIN = 'GET_RECOMMENDATIONS_BEGIN' // Age-based suggestions
export const GET_RECOMMENDATIONS_SUCCESS = 'GET_RECOMMENDATIONS_SUCCESS'
export const GET_RECOMMENDATIONS_ERROR = 'GET_RECOMMENDATIONS_ERROR'
export const GET_SINGLE_PRODUCT_BEGIN = 'GET_SINGLE_PRODUCT_BEGIN'
export const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS'
export const GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR'
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
export const TRACK_RECENTLY_VIEWED = 'TRACK_RECENTLY_VIEWED' // For personalized recommendations

// Filter & Sort Actions
export const UPDATE_SORT = 'UPDATE_SORT'
export const SORT_PRODUCTS = 'SORT_PRODUCTS'
export const UPDATE_FILTERS = 'UPDATE_FILTERS'
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
export const CLEAR_FILTERS = 'CLEAR_FILTERS'
export const UPDATE_AGE_FILTER = 'UPDATE_AGE_FILTER' // Specific to children's clothing
export const UPDATE_SAFETY_FILTER = 'UPDATE_SAFETY_FILTER' // Non-toxic materials filter

// Cart Actions
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const TOGGLE_CART_ITEM_AMOUNT = 'TOGGLE_CART_ITEM_AMOUNT'
export const CLEAR_CART = 'CLEAR_CART'
export const COUNT_CART_TOTALS = 'COUNT_CART_TOTALS'
export const ADD_GIFT_WRAP = 'ADD_GIFT_WRAP' // Special service
export const ADD_DONATION = 'ADD_DONATION' // Charity donation option
export const APPLY_BUNDLE_DISCOUNT = 'APPLY_BUNDLE_DISCOUNT' // For multi-item purchases

// User Actions
export const SAVE_FOR_LATER = 'SAVE_FOR_LATER' // Wishlist feature
export const TOGGLE_WISHLIST = 'TOGGLE_WISHLIST'
export const UPDATE_PARENT_PROFILE = 'UPDATE_PARENT_PROFILE' // Child age/storage
export const AGE_VERIFICATION = 'AGE_VERIFICATION' // For age-restricted items

// Services Actions
export const HANDLE_CLICK_FROM_SERVICES = 'HANDLE_CLICK_FROM_SERVICES'
export const RESET_IS_CLICK_FROM_SERVICES = 'RESET_IS_CLICK_FROM_SERVICES'
export const SCHEDULE_CONSULTATION = 'SCHEDULE_CONSULTATION' // Personal shopping
export const REQUEST_SIZE_HELP = 'REQUEST_SIZE_HELP' // Size recommendation service

// Inventory & Notifications
export const LOW_STOCK_ALERT = 'LOW_STOCK_ALERT'
export const RESTOCK_NOTIFICATION = 'RESTOCK_NOTIFICATION'
export const BACK_IN_STOCK = 'BACK_IN_STOCK'

// Special Features
export const TOGGLE_ECO_MODE = 'TOGGLE_ECO_MODE' // Sustainable shopping mode
export const UPDATE_GIFT_FINDER = 'UPDATE_GIFT_FINDER' // Gift recommendation engine
export const SAVE_PLAY_KIT = 'SAVE_PLAY_KIT' // Curated outfit combinations

// Error Handling & Analytics
export const TRACK_INTERACTION = 'TRACK_INTERACTION' // User behavior analytics
export const LOG_ERROR = 'LOG_ERROR' // Error tracking
export const CAPTURE_ABANDONED_CART = 'CAPTURE_ABANDONED_CART'