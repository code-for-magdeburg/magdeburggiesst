import { 
    ADD_ARTICLE, 
    SET_SIDEBAR,
    SET_SELECTED_TREE_DATA,
    SET_SELECTED_TREE_DATA_LOADING,
    SET_WATERED_TREES,
    SET_WATERED_TREES_FETCHED,
    SET_WATERING_TREE,
    SET_DATA_LOADED,
    SET_TREE_AGE_DATA_LOADING,
    SET_TREE_AGE_DATA,
    SET_TREE_AGE_DATA_UPDATED,
    SET_WATERED_TREE_DATA_UPDATED,
    SET_DATA_INCLUDED
} from "../constants/action-types";

const initialState = {
  articles: [],
  sidebar: true,
  selectedTreeData: false,
  selectedTreeDataLoading: false,
  wateredTrees: null,
  wateredTreesFetched: false,
  wateringTree: false,
  dataLoaded: false,
  treesAgeDataLoading: false,
  treeAgeData: null,
  wateredTreeDataUpdated: true,
  treeAgeDataUpdated: false,
  dataIncluded: null
};

function rootReducer(state = initialState, action) {

    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    if (action.type === SET_SIDEBAR) {
        return {...state, sidebar: action.payload }
    }

    if (action.type === SET_SELECTED_TREE_DATA) {
        return {...state, selectedTreeData: action.payload }
    }

    if (action.type === SET_SELECTED_TREE_DATA_LOADING) {
        return {...state, selectedTreeDataLoading: action.payload }
    }

    if (action.type === SET_WATERED_TREES) {
        return {...state, wateredTrees: action.payload }
    }

    if (action.type === SET_WATERED_TREES_FETCHED) {
        return {...state, wateredTreesFetched: action.payload }
    }

    if (action.type === SET_WATERING_TREE) {
        return {...state, wateringTree: action.payload }
    }

    if (action.type === SET_DATA_LOADED) {
        return {...state, dataLoaded: action.payload }
    }

    if (action.type === SET_TREE_AGE_DATA_LOADING) {
        return {...state, treeAgeDataLoading: action.payload }
    }

    if (action.type === SET_TREE_AGE_DATA) {
        return {...state, treeAgeData: action.payload }
    }

    if (action.type === SET_WATERED_TREE_DATA_UPDATED) {
        return {...state, wateredTreeDataUpdated: action.payload }
    }

    if (action.type === SET_TREE_AGE_DATA_UPDATED) {
        return {...state, treeAgeDataUpdated: action.payload }
    }

    if (action.type === SET_DATA_INCLUDED) {
        return {...state, dataIncluded: action.payload }
    }
    
    return state;
}

export default rootReducer;