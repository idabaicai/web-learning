"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
var antd_1 = require("antd");
var Header = antd_1.Layout.Header, Footer = antd_1.Layout.Footer, Sider = antd_1.Layout.Sider, Content = antd_1.Layout.Content;
function App() {
    return (<>
      <antd_1.Layout>
        <Header>
          <img src={logo_svg_1["default"]} alt=""/>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </antd_1.Layout>
    </>);
}
exports["default"] = App;
