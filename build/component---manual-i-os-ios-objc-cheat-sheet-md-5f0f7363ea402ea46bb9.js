(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{mdjA:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/iOS/ios-objc-cheat-sheet.md"}});var c={_frontmatter:i},s=a.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(s,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"ios-cheat-sheet"},"iOS Cheat Sheet"),Object(r.b)("h2",{id:"objios-1-open-settings"},"OBJIOS-1: Open Settings"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-objective-c"}),"[[UIApplication sharedApplication] openURL:[NSURL URLWithString:UIApplicationOpenSettingsURLString]];\n")),Object(r.b)("h1",{id:"dates-and-time"},"Dates and Time"),Object(r.b)("h2",{id:"check-if-the-time-is-between-two-hours"},"Check if the time is between two hours"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-objective-c"}),'-(void)checkTimeFrame\n{\n  NSDateComponents *components = [[NSCalendar currentCalendar] components:NSHourCalendarUnit | NSMinuteCalendarUnit | NSSecondCalendarUnit fromDate:[NSDate date]];\n  NSInteger currentHour = [components hour];\n\n  if (currentHour < 9 && currentHour > 3) {\n    // Do Something\n    NSLog(@"In between the times");\n    NSLog(@"%ld\\n", (long)currentHour);\n  } else {\n    NSLog(@"Not between the times");\n    NSLog(@"%ld\\n", (long)currentHour);\n  }\n}\n')),Object(r.b)("h1",{id:"uisearchbar"},"UISearchBar"),Object(r.b)("h2",{id:"target-search-bar-after-load"},"Target Search Bar after load"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-objective-c"}),"-(void)viewDidAppear:(BOOL)animated\n{\n  [self.searchBar becomeFirstResponder];\n}\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/iOS/ios-objc-cheat-sheet.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-i-os-ios-objc-cheat-sheet-md-5f0f7363ea402ea46bb9.js.map