"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var users_reducers_ts_1 = require("../../../redux/users-reducers.ts");
var Users_module_css_1 = require("./Users.module.css");
var react_redux_1 = require("react-redux");
var MyButton_tsx_1 = require("../../UI/Button/MyButton.tsx");
var react_router_dom_1 = require("react-router-dom");
var Loader_1 = require("../../UI/Loader/Loader");
var Users = function (props) {
    var loaderRef = (0, react_1.useRef)();
    var history = (0, react_router_dom_1.useNavigate)();
    var onCrossingProfile = function (id) {
        history("/users/".concat(id));
    };
    var users = (0, react_redux_1.useSelector)(function (state) { return state.Users.users; });
    var currentPage = (0, react_redux_1.useSelector)(function (state) { return state.Users.currentPage; });
    var pageSize = (0, react_redux_1.useSelector)(function (state) { return state.Users.pageSize; });
    var totalUsersCount = (0, react_redux_1.useSelector)(function (state) { return state.Users.totalUsersCount; });
    var isFetching = (0, react_redux_1.useSelector)(function (state) { return state.Users.isFetching; });
    var toggleFollowingProgress = (0, react_redux_1.useSelector)(function (state) { return state.Users.isFetching; });
    var dispatch = (0, react_redux_1.useDispatch)();
    function createPages(pages, pagesCount, currentPage) {
        if (pagesCount > 10) {
            if (currentPage > 5) {
                for (var i = currentPage - 4; i <= currentPage + 5; i++) {
                    pages.push(i);
                    if (i == pagesCount)
                        break;
                }
            }
            else {
                for (var i = 1; i <= 10; i++) {
                    pages.push(i);
                    if (i == pagesCount)
                        break;
                }
            }
        }
        else {
            for (var i = 1; i <= pagesCount; i++) {
                pages.push(i);
            }
        }
    }
    var pages = [];
    var pagesCount = Math.ceil(totalUsersCount / pageSize);
    createPages(pages, pagesCount, currentPage);
    var onUnsubscribeHandle = function (id) {
        dispatch((0, users_reducers_ts_1.unSubscribe)(id));
    };
    var onFollowHandle = function (id) {
        dispatch((0, users_reducers_ts_1.follow)(id));
        console.log(id);
    };
    (0, react_1.useEffect)(function () {
        dispatch((0, users_reducers_ts_1.toggleIsFetching)(true));
        dispatch((0, users_reducers_ts_1.getUsers)(currentPage, pageSize));
        dispatch((0, users_reducers_ts_1.toggleIsFetching)(false));
    }, [currentPage, pageSize]);
    (0, react_1.useEffect)(function () {
        console.log('Подписка');
    }, [users === null || users === void 0 ? void 0 : users.map(function (i) { return i.followed; })]);
    return (<div className={Users_module_css_1.default.userContainer}>
            {users === null || users === void 0 ? void 0 : users.map(function (user) {
            var _a, _b;
            return <div key={user.id} className={Users_module_css_1.default.user}>
                        <div className={Users_module_css_1.default.aboutUser}>
                            <img className={Users_module_css_1.default.image} onClick={function (e) { return onCrossingProfile(user.id); }} src={((_a = user.image) === null || _a === void 0 ? void 0 : _a.small)
                    ? (_b = user.image) === null || _b === void 0 ? void 0 : _b.small
                    : "https://i.pinimg.com/564x/31/27/12/312712dd9e6f02c187d2708b78d94931.jpg"} alt="user-photo"/>
                            <div className={Users_module_css_1.default.usersInfo}>
                                <div>
                                    {user.name}
                                </div>
                                <div>
                                    {user.status}
                                </div>
                            </div>
                        </div>
                        <div className={Users_module_css_1.default.interactionBlock}>
                            <div className={Users_module_css_1.default.followBlock}>
                                {user.followed
                    ? <MyButton_tsx_1.default onClick={function (e) { return onFollowHandle(user.id); }}>
                                            Отписаться
                                          </MyButton_tsx_1.default>
                    : <MyButton_tsx_1.default onClick={function (e) { return onUnsubscribeHandle(user.id); }}>
                                            Подписаться
                                          </MyButton_tsx_1.default>}
                            </div>
                        </div>
                    </div>;
        })}
            {isFetching
            ? <Loader_1.default />
            : null}
            <div className={Users_module_css_1.default.pages}>
                {pages.map(function (page, index) {
            return <span className={currentPage === page ? Users_module_css_1.default.currentPage : Users_module_css_1.default.page} key={index} onClick={function (e) { return dispatch((0, users_reducers_ts_1.setCurrentPage)(page)); }}>
                        {index}
                    </span>;
        })}
            </div>
        </div>);
};
exports.default = Users;
