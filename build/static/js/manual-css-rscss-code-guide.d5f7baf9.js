(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"./manual/CSS/RSCSS-Code-Guide.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c});var s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i={},l="wrapper";function c(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(a.b)(l,Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"rscss-cheat-sheet"},"RSCSS CHEAT SHEET"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-cheat-sheet"}),"RSCSS CHEAT SHEET"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-1-naming-components"}),"RSCSS-1: Naming Components")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-2-naming-elements"}),"RSCSS-2: Naming Elements")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-3-element-selectors"}),"RSCSS-3: Element Selectors")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-4-multiple-words"}),"RSCSS-4: Multiple Words")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-5-avoid-tag-selectors"}),"RSCSS-5: Avoid Tag Selectors")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-6-variants"}),"RSCSS-6: Variants")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-7-naming-variants"}),"RSCSS-7: Naming Variants")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-8-element-variants"}),"RSCSS-8: Element Variants")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-9-nested-components"}),"RSCSS-9: Nested Components")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-10-simplifying-nested-components"}),"RSCSS-10: Simplifying Nested Components")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-11-layouts"}),"RSCSS-11: Layouts")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-12-avoid-positioning-properties"}),"RSCSS-12: Avoid positioning properties")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-13-fixed-dimensions"}),"RSCSS-13: Fixed Dimensions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-14-define-position-in-parents"}),"RSCSS-14: Define Position in Parents")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-15-helpers"}),"RSCSS-15: Helpers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-16-naming-helpers"}),"RSCSS-16: Naming Helpers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-17-organising-helpers"}),"RSCSS-17: Organising Helpers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-18-css-structure"}),"RSCSS-18: CSS Structure")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-19-one-component-per-file"}),"RSCSS-19: One Component Per File")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-20-avoid-overnesting"}),"RSCSS-20: Avoid Overnesting")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-21-pitfalls"}),"RSCSS-21: Pitfalls")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-22-bleeding-through-nested-components"}),"RSCSS-22: Bleeding Through Nested Components")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#rscss-23-apprehensions"}),"RSCSS-23: Apprehensions"))))),Object(a.b)("h2",{id:"rscss-1-naming-components"},"RSCSS-1: Naming Components"),Object(a.b)("p",null,"Components will be named with at least two words, separated by a dash. Examples of components:"),Object(a.b)("p",null,"A like button (.like-button)\nA search form (.search-form)\nA news article card (.article-card)"),Object(a.b)("h2",{id:"rscss-2-naming-elements"},"RSCSS-2: Naming Elements"),Object(a.b)("p",null,"Each component may have elements. They should have classes that are only one word."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".search-form {\n    > .field {\n        /* ... */\n    }\n    > .action {\n        /* ... */\n    }\n}\n")),Object(a.b)("h2",{id:"rscss-3-element-selectors"},"RSCSS-3: Element Selectors"),Object(a.b)("p",null,"Prefer to use the > child selector whenever possible. This prevents bleeding through nested components, and performs better than descendant selectors."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".article-card {\n    .title {\n        /* okay */\n    }\n    > .author {\n        /* \u2713 better */\n    }\n}\n")),Object(a.b)("h2",{id:"rscss-4-multiple-words"},"RSCSS-4: Multiple Words"),Object(a.b)("p",null,"For those that need two or more words, concatenate them without dashes or underscores."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".profile-box {\n    > .firstname {\n        /* ... */\n    }\n    > .lastname {\n        /* ... */\n    }\n    > .avatar {\n        /* ... */\n    }\n}\n")),Object(a.b)("h2",{id:"rscss-5-avoid-tag-selectors"},"RSCSS-5: Avoid Tag Selectors"),Object(a.b)("p",null,"Use classnames whenever possible. Tag selectors are fine, but they may come at a small performance penalty and may not be as descriptive."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".article-card {\n    > h3 {\n        /* \u2717 avoid */\n    }\n    > .name {\n        /* \u2713 better */\n    }\n}\n")),Object(a.b)("h2",{id:"rscss-6-variants"},"RSCSS-6: Variants"),Object(a.b)("p",null,"Components may have variants. Elements may have variants, too."),Object(a.b)("p",null,"eg."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".search-form\n.search-form .-prefixed\n.search-form .-compact\n")),Object(a.b)("h2",{id:"rscss-7-naming-variants"},"RSCSS-7: Naming Variants"),Object(a.b)("p",null,"Classnames for variants will be prefixed by a dash (-)."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),".like-button {\n  &.-wide { /* ... */ }\n  &.-short { /* ... */ }\n  &.-disabled { /* ... */ }\n}\n")),Object(a.b)("h2",{id:"rscss-8-element-variants"},"RSCSS-8: Element Variants"),Object(a.b)("p",null,"Elements may also have variants."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".shopping-card {\n    > .title {\n        /* ... */\n    }\n    > .title.-small {\n        /* ... */\n    }\n}\n")),Object(a.b)("p",null,"Dash prefixes"),Object(a.b)("p",null,"Dashes are the preferred prefix for variants."),Object(a.b)("p",null,"It prevents ambiguity with elements.\nA CSS class can only start with a letter, ","_"," or -.\nDashes are easier to type than underscores.\nIt kind of resembles switches in UNIX commands (gcc -O2 -Wall -emit-last)."),Object(a.b)("h2",{id:"rscss-9-nested-components"},"RSCSS-9: Nested Components"),Object(a.b)("p",null,"Sometimes it's necessary to nest components. Here are some guidelines for doing that."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),"<div class='article-link'>\n  <div class='vote-box'>\n    ...\n  </div>\n  <h3 class='title'>...</h3>\n  <p class='meta'>...</p>\n</div>\n")),Object(a.b)("p",null,"A component may need to appear a certain way when nested in another component. Avoid modifying the nested component by reaching into it from the containing component."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".article-header {\n    > .vote-box > .up {\n        /* \u2717 avoid this */\n    }\n}\n")),Object(a.b)("p",null,"Instead, prefer to add a variant to the nested component and apply it from the containing component."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),"<div class='article-header'>\n  <div class='vote-box -highlight'>\n    ...\n  </div>\n  ...\n</div>\n")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".vote-box {\n    &.-highlight > .up {\n        /* ... */\n    }\n}\n")),Object(a.b)("h2",{id:"rscss-10-simplifying-nested-components"},"RSCSS-10: Simplifying Nested Components"),Object(a.b)("p",null,"Sometimes, when nesting components, your markup can get dirty:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),"<div class='search-form'>\n  <input class='input' type='text'>\n  <button class='search-button -red -large'></button>\n</div>\nYou can simplify this by using your CSS preprocessor's @extend mechanism:\n\n<div class='search-form'>\n  <input class='input' type='text'>\n  <button class='submit'></button>\n</div>\n")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".search-form {\n    > .submit {\n        @extend .search-button;\n        @extend .search-button.-red;\n        @extend .search-button.-large;\n    }\n}\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"rscss-11-layouts"},"RSCSS-11: Layouts"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div class="recipe-item">\n    <div class="recipe-list">\n    </div>\n</div>\n')),Object(a.b)("h2",{id:"rscss-12-avoid-positioning-properties"},"RSCSS-12: Avoid positioning properties"),Object(a.b)("p",null,"Components should be made in a way that they're reusable in different contexts. Avoid putting these properties in components:"),Object(a.b)("p",null,"Positioning (position, top, left, right, bottom)\nFloats (float, clear)\nMargins (margin)\nDimensions (width, height) ","*"),Object(a.b)("h2",{id:"rscss-13-fixed-dimensions"},"RSCSS-13: Fixed Dimensions"),Object(a.b)("p",null,"Exception to these would be elements that have fixed width/heights, such as avatars and logos."),Object(a.b)("h2",{id:"rscss-14-define-position-in-parents"},"RSCSS-14: Define Position in Parents"),Object(a.b)("p",null,"If you need to define these, try to define them in whatever context they will be in. In this example below, notice that the widths and floats are applied on the list component, not the component itself."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".article-list {\n    & {\n        @include clearfix;\n    }\n\n    > .article-card {\n        width: 33.3%;\n        float: left;\n    }\n}\n\n.article-card {\n    & {\n        /* ... */\n    }\n    > .image {\n        /* ... */\n    }\n    > .title {\n        /* ... */\n    }\n    > .category {\n        /* ... */\n    }\n}\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"rscss-15-helpers"},"RSCSS-15: Helpers"),Object(a.b)("p",null,"For general-purpose classes meant to override values, put them in a separate file and name them beginning with an underscore. They are typically things that are tagged with !important. Use them very sparingly."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"._unmargin {\n    margin: 0 !important;\n}\n._center {\n    text-align: center !important;\n}\n._pull-left {\n    float: left !important;\n}\n._pull-right {\n    float: right !important;\n}\n")),Object(a.b)("h2",{id:"rscss-16-naming-helpers"},"RSCSS-16: Naming Helpers"),Object(a.b)("p",null,"Prefix classnames with an underscore. This will make it easy to differentiate them from modifiers defined in the component. Underscores also look a bit ugly which is an intentional side effect: using too many helpers should be discouraged."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),"<div class='order-graphs -slim _unmargin'>\n</div>\n")),Object(a.b)("h2",{id:"rscss-17-organising-helpers"},"RSCSS-17: Organising Helpers"),Object(a.b)("p",null,"Place all helpers in one file called helpers. While you can separate them into multiple files, it's very preferrable to keep your number of helpers to a minimum."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"rscss-18-css-structure"},"RSCSS-18: CSS Structure"),Object(a.b)("h2",{id:"rscss-19-one-component-per-file"},"RSCSS-19: One Component Per File"),Object(a.b)("p",null,"For each component, place them in their own file."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"/* css/components/search-form.scss */\n.search-form {\n    > .button {\n        /* ... */\n    }\n    > .field {\n        /* ... */\n    }\n    > .label {\n        /* ... */\n    }\n\n    // variants\n    &.-small {\n        /* ... */\n    }\n    &.-wide {\n        /* ... */\n    }\n}\n")),Object(a.b)("p",null,"Use glob matching"),Object(a.b)("p",null,"In sass-rails and stylus, this makes including all of them easy:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"@import 'components/*';\n")),Object(a.b)("h2",{id:"rscss-20-avoid-overnesting"},"RSCSS-20: Avoid Overnesting"),Object(a.b)("p",null,"Use no more than 1 level of nesting. It's easy to get lost with too much nesting."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"/* \u2717 Avoid: 3 levels of nesting */\n.image-frame {\n    > .description {\n        /* ... */\n\n        > .icon {\n            /* ... */\n        }\n    }\n}\n\n/* \u2713 Better: 2 levels */\n.image-frame {\n    > .description {\n        /* ... */\n    }\n    > .description > .icon {\n        /* ... */\n    }\n}\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"rscss-21-pitfalls"},"RSCSS-21: Pitfalls"),Object(a.b)("h2",{id:"rscss-22-bleeding-through-nested-components"},"RSCSS-22: Bleeding Through Nested Components"),Object(a.b)("p",null,"Be careful about nested components with elements sharing the same name as elements in its container."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),"<article class='article-link'>\n <div class='vote-box'>\n    <button class='up'></button>\n    <button class='down'></button>\n    <span class='count'>4</span>\n  </div>\n\n  <h3 class='title'>Article title</h3>\n  <p class='count'>3 votes</p>\n</article>\n")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".article-link {\n    > .title {\n        /* ... */\n    }\n    > .count {\n        /* ... (!!!) */\n    }\n}\n\n.vote-box {\n    > .up {\n        /* ... */\n    }\n    > .down {\n        /* ... */\n    }\n    > .count {\n        /* ... */\n    }\n}\n")),Object(a.b)("p",null,"In this case, if .article-link > .count did not have the > (child) selector, it will also apply to the .vote-box .count element. This is one of the reasons why child selectors are preferred."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"rscss-23-apprehensions"},"RSCSS-23: Apprehensions"),Object(a.b)("p",null,"Some people may have apprehensions to these conventions, such as:"),Object(a.b)("p",null,'"But dashes suck"'),Object(a.b)("p",null,"You're free to omit them and just use regular words, but keep the rest of the ideas in place (components, elements, variants)."),Object(a.b)("p",null,'"But I can\'t think of 2 words!"'),Object(a.b)("p",null,"Some components will only need one word to express their purpose, such as alert. In these cases, consider that using some suffixes will make it clearer that it's a block-level element:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".alert-box.alert-card .alert-block Or for inlines: .link-button .link-span;\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/CSS/RSCSS-Code-Guide.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-css-rscss-code-guide.101a1afd2417ec7a4a77.js.map