// src/Button.tsx
import {
  createElement
} from "react";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-2394-nXTTm1RgvFLy/main/src/Button.modules.css.js
var digest = "4b54cbb1b9be55387935e56c851dbfed8fe8fef6b1f9ac6745cee5f280f24185";
var css = `._button_kpmle_1 {
  background-color: #c8d5ff;
}
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Button_modules_css_default = { "button": "_button_kpmle_1" };

// src/Button.tsx
function Button({ title = "Title" }) {
  return /* @__PURE__ */ createElement("button", {
    className: Button_modules_css_default.button
  }, title);
}
export {
  Button
};
