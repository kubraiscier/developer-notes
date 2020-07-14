(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{fskN:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return a})),t.d(e,"default",(function(){return h}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),i=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Adapter-Pattern.md"}});var c={_frontmatter:a},s=i.a;function h(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,["components"]);return Object(r.b)(s,o({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"adapter-pattern"},"Adapter Pattern"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// the base adapter\ninterface RequestAdapter {\n  request(newParam: string): void;\n}\n\n// The adapter utilising the old way\nclass InterfaceAdapter implements RequestAdapter {\n  request(newParam: string): void {\n    const old = new OldInterface();\n    old.requestInOldWay({\n      data: newParam\n    });\n  }\n}\n\nclass OldInterface {\n  requestInOldWay(oldParam: any): void {\n    console.log(oldParam);\n  }\n}\n\n(function main() {\n  const adapter = new InterfaceAdapter();\n  adapter.request('param');\n})();\n")),Object(r.b)("h2",{id:"lightning-to-microusb-adapter-example"},"Lightning To MicroUSB Adapter Example"),Object(r.b)("p",null,"A great Java example:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-java"}),'interface LightningPhone {\n    void recharge();\n    void useLightning();\n}\n\ninterface MicroUsbPhone {\n    void recharge();\n    void useMicroUsb();\n}\n\nclass Iphone implements LightningPhone {\n    private boolean connector;\n\n    @Override\n    public void useLightning() {\n        connector = true;\n        System.out.println("Lightning connected");\n    }\n\n    @Override\n    public void recharge() {\n        if (connector) {\n            System.out.println("Recharge started");\n            System.out.println("Recharge finished");\n        } else {\n            System.out.println("Connect Lightning first");\n        }\n    }\n}\n\nclass Android implements MicroUsbPhone {\n    private boolean connector;\n\n    @Override\n    public void useMicroUsb() {\n        connector = true;\n        System.out.println("MicroUsb connected");\n    }\n\n    @Override\n    public void recharge() {\n        if (connector) {\n            System.out.println("Recharge started");\n            System.out.println("Recharge finished");\n        } else {\n            System.out.println("Connect MicroUsb first");\n        }\n    }\n}\n\nclass LightningToMicroUsbAdapter implements MicroUsbPhone {\n    private final LightningPhone lightningPhone;\n\n    public LightningToMicroUsbAdapter(LightningPhone lightningPhone) {\n        this.lightningPhone = lightningPhone;\n    }\n\n    @Override\n    public void useMicroUsb() {\n        System.out.println("MicroUsb connected");\n        lightningPhone.useLightning();\n    }\n\n    @Override\n    public void recharge() {\n        lightningPhone.recharge();\n    }\n}\n\npublic class AdapterDemo {\n    static void rechargeMicroUsbPhone(MicroUsbPhone phone) {\n        phone.useMicroUsb();\n        phone.recharge();\n    }\n\n    static void rechargeLightningPhone(LightningPhone phone) {\n        phone.useLightning();\n        phone.recharge();\n    }\n\n    public static void main(String[] args) {\n        Android android = new Android();\n        Iphone iPhone = new Iphone();\n\n        System.out.println("Recharging android with MicroUsb");\n        rechargeMicroUsbPhone(android);\n\n        System.out.println("Recharging iPhone with Lightning");\n        rechargeLightningPhone(iPhone);\n\n        System.out.println("Recharging iPhone with MicroUsb");\n        rechargeMicroUsbPhone(new LightningToMicroUsbAdapter(iPhone));\n    }\n}\n')))}h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Adapter-Pattern.md"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-adapter-pattern-md-3a3c42b62d0bd4090348.js.map