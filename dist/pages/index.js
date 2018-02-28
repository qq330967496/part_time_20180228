'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '测试'
    }, _this.components = {}, _this.data = {
      img_src: ''
    }, _this.computed = {}, _this.methods = {
      chooseImage: function chooseImage() {
        var _self = _this;
        wx.chooseImage({
          count: 1,
          success: function success(r) {
            console.log(r.tempFilePaths, r.tempFiles);
            _self.img_src = r.tempFilePaths[0];
            _self.$apply();
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nX3NyYyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNob29zZUltYWdlIiwiX3NlbGYiLCJ3eCIsImNvdW50Iiwic3VjY2VzcyIsInIiLCJjb25zb2xlIiwibG9nIiwidGVtcEZpbGVQYXRocyIsInRlbXBGaWxlcyIsIiRhcHBseSIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxlQUFTO0FBREosSyxRQUlQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsbUJBQWEsdUJBQU07QUFDakIsWUFBSUMsYUFBSjtBQUNBQyxXQUFHRixXQUFILENBQWU7QUFDYkcsaUJBQU8sQ0FETTtBQUViQyxtQkFBUyxpQkFBVUMsQ0FBVixFQUFhO0FBQ3BCQyxvQkFBUUMsR0FBUixDQUFZRixFQUFFRyxhQUFkLEVBQTZCSCxFQUFFSSxTQUEvQjtBQUNBUixrQkFBTUosT0FBTixHQUFnQlEsRUFBRUcsYUFBRixDQUFnQixDQUFoQixDQUFoQjtBQUNBUCxrQkFBTVMsTUFBTjtBQUNEO0FBTlksU0FBZjtBQVFEO0FBWE8sSyxRQWNWQyxNLEdBQVMsRTs7Ozs7NkJBRUMsQ0FDVDs7OztFQTdCZ0MsZUFBS0MsSTs7a0JBQW5CcEIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rWL6K+VJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge31cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbWdfc3JjOiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjaG9vc2VJbWFnZTogKCkgPT4ge1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIudGVtcEZpbGVQYXRocywgci50ZW1wRmlsZXMpXG4gICAgICAgICAgICBfc2VsZi5pbWdfc3JjID0gci50ZW1wRmlsZVBhdGhzWzBdO1xuICAgICAgICAgICAgX3NlbGYuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHt9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgIH1cbiAgfVxuIl19