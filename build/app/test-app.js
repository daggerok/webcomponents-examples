/*! Built with http://stenciljs.com */
App.loadComponents(

/**** module id (dev mode) ****/
"test-app",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var TestApp = /** @class */ (function () {
    function TestApp() {
    }
    TestApp.prototype.render = function () {
        return (h("stencil-router", 0,
            h("ul", 0,
                h("li", 0,
                    h("stencil-route-link", { "a": { "url": "/" }, "p": { "exact": true } }, t("Exact Base Link"))),
                h("li", 0,
                    h("stencil-route-link", { "a": { "url": "/" } }, t("Base Link"))),
                h("li", 0,
                    h("stencil-route-link", { "a": { "url": "/demo" } }, t("Demo Link"))),
                h("li", 0,
                    h("stencil-route-link", { "a": { "url": "/demo2" } }, t("Demo2 Link"))),
                h("li", 0,
                    h("stencil-route-link", { "a": { "url": "/demo3" } }, t("Demo3 Link"))),
                h("li", 0,
                    h("stencil-route-link", { "a": { "url": "/demo3/page1" } }, t("Demo3 Page1 Link"))),
                h("li", 0,
                    h("stencil-route-link", { "a": { "url": "/demo3/page2" } }, t("Demo3 Page2 Link")))),
            h("stencil-route", { "a": { "url": "/" }, "p": { "exact": true, "routeRender": function (props) {
                        console.log(props);
                        return h("span", 0, t("rendering /"));
                    } } }),
            h("stencil-route", { "a": { "url": "/demo" }, "p": { "exact": true, "routeRender": function (props) {
                        console.log(props);
                        return h("span", 0, t("rendering /demo"));
                    } } }),
            h("stencil-route", { "a": { "url": "/demo2" }, "p": { "exact": true, "routeRender": function (props) {
                        console.log(props);
                        return [
                            h("span", 0, t("rendering /demo2")),
                            h("stencil-router-redirect", { "a": { "url": "/demo3" } })
                        ];
                    } } }),
            h("stencil-route", { "a": { "url": "/demo3" }, "p": { "exact": true, "routeRender": function (props) {
                        console.log(props);
                        return h("span", 0, t("rendering /demo 3"));
                    } } }),
            h("stencil-route", { "a": { "url": "/demo3", "component": 'test-page' }, "p": { "componentProps": { "pages": ['intro/index.html'] } } })));
    };
    return TestApp;
}());

var TestPage = /** @class */ (function () {
    function TestPage() {
    }
    TestPage.prototype.render = function () {
        return [
            h("span", 0, t("Demo 3 Test Page"),
                h("br", 0)),
            h("stencil-route", { "a": { "url": "/demo3/page1" }, "p": { "exact": true, "routeRender": function (props) {
                        console.log(props);
                        return [
                            h("a", { "o": { "click": function (e) {
                                        e.preventDefault();
                                        props.history.push('/demo3/page2', { 'blue': 'blue' });
                                    } }, "a": { "href": "#" } }, t("History push to /demo3/page2")),
                            h("br", 0),
                            h("span", 0, t("rendering /demo3/page1"))
                        ];
                    } } }),
            h("stencil-route", { "a": { "url": "/demo3/page2" }, "p": { "exact": true, "routeRender": function (props) {
                        console.log(props);
                        return [
                            h("a", { "o": { "click": function (e) {
                                        e.preventDefault();
                                        props.history.push('/demo3/page1', { 'red': 'red' });
                                    } }, "a": { "href": "#" } }, t("History push to /demo3/page1")),
                            h("br", 0),
                            h("span", 0, t("rendering /demo3/page2"))
                        ];
                    } } })
        ];
    };
    return TestPage;
}());

exports['TEST-APP'] = TestApp;
exports['TEST-PAGE'] = TestPage;
},


/***************** test-app *****************/
[
/** test-app: tag **/
"TEST-APP"

],

/***************** test-page *****************/
[
/** test-page: tag **/
"TEST-PAGE",

/** test-page: members **/
[
  [ "pages", /** prop **/ 1 ]
]

]
)