"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatus = exports.getStatus = exports.getUserProfile = exports.setUsers = exports.setPosts = exports.addNewObj = exports.deletePost = exports.setStatus = exports.setUserProfile = exports.addPostActionCreator = void 0;
var userApi_1 = require("../api/userApi");
var postsApi_1 = require("../api/postsApi");
var uuid_1 = require("uuid");
var ADD_POST = 'ADD-POST';
var SET_USER_PROFILE = 'SET_USER_PROFILE';
var SET_STATUS = 'SET_STATUS';
var DELETE_POST = "DELETE_POST";
var SET_POSTS = "SET_POSTS";
var profileActionType;
(function (profileActionType) {
    profileActionType["ADD_POST"] = "ADD_POST";
    profileActionType["SET_USER_PROFILE"] = "SET_USER_PROFILE";
    profileActionType["SET_STATUS"] = "SET_STATUS";
    profileActionType["DELETE_POST"] = "DELETE_POST";
})(profileActionType || (profileActionType = {}));
var initialState = {
    posts: [
        { id: (0, uuid_1.v1)(), icon: 'https://i.pinimg.com/564x/3f/90/4d/3f904df6be16845d5a1853ec24547675.jpg', likes: 1, description: 'Круто получилось', comments: [{}], },
        { id: (0, uuid_1.v1)(), icon: 'https://i.pinimg.com/564x/3f/90/4d/3f904df6be16845d5a1853ec24547675.jpg', likes: 2, description: 'Круто получилось', comments: [{}], },
        { id: (0, uuid_1.v1)(), icon: 'https://i.pinimg.com/564x/58/31/e2/5831e2dc2311ca78d7fc787bd188a27e.jpg', likes: 3, description: 'Круто получилось', comments: [{}], },
        { id: (0, uuid_1.v1)(), icon: 'https://i.pinimg.com/564x/11/2c/c1/112cc179c8f93a5a918e63b2fd966bd5.jpg', likes: 4, description: 'Круто получилось', comments: [{}], },
    ],
    profile: null,
    status: "",
};
var profileReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_POST: {
            var newPost = {
                id: (0, uuid_1.v1)(),
                message: action.message,
                likesCount: 0,
                icon: action.icon,
                comments: [null]
            };
            return __assign(__assign({}, state), { posts: __spreadArray(__spreadArray([], state.posts, true), [newPost], false) });
        }
        case SET_STATUS: {
            return __assign(__assign({}, state), { status: action.status });
        }
        case SET_USER_PROFILE: {
            return __assign(__assign({}, state), { profile: action.profile });
        }
        case DELETE_POST: {
            return __assign(__assign({}, state), { posts: state.posts.filter(function (i) { return i.id != action.postId; }) });
        }
        case SET_POSTS: {
            return __assign(__assign({}, state), { posts: __spreadArray(__spreadArray([], state.posts, true), action.payload, true) });
        }
        default:
            return state;
    }
};
var addPostActionCreator = function (message, icon) { return ({ type: ADD_POST, message: message, icon: icon }); };
exports.addPostActionCreator = addPostActionCreator;
var setUserProfile = function (profile) { return ({ type: SET_USER_PROFILE, profile: profile }); };
exports.setUserProfile = setUserProfile;
var setStatus = function (status) { return ({ type: SET_STATUS, status: status }); };
exports.setStatus = setStatus;
var deletePost = function (postId) { return ({ type: DELETE_POST, postId: postId }); };
exports.deletePost = deletePost;
var addNewObj = function (obj) { return ({ type: GET_NEW_OBJECT, obj: obj }); };
exports.addNewObj = addNewObj;
var setPosts = function (payload) { return ({ type: SET_POSTS, payload: payload }); };
exports.setPosts = setPosts;
var setUsers = function () {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postsApi_1.PostsApi.getPosts()];
                case 1:
                    response = _a.sent();
                    dispatch((0, exports.setPosts)(response));
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.setUsers = setUsers;
var getUserProfile = function (id) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userApi_1.profileAPI.getProfile(id)];
                case 1:
                    response = _a.sent();
                    dispatch((0, exports.setUserProfile)(response.data));
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.getUserProfile = getUserProfile;
var getStatus = function (id) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userApi_1.profileAPI.getStatus(id)];
                case 1:
                    response = _a.sent();
                    dispatch((0, exports.setStatus)(response.data));
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.getStatus = getStatus;
var updateStatus = function (status) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userApi_1.profileAPI.updateStatus(status)];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    dispatch((0, exports.setStatus)(status));
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.updateStatus = updateStatus;
exports.default = profileReducer;
