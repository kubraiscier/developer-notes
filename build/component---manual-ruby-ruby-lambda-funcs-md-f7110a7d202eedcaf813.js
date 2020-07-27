(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{qI5F:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return u}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Ruby/Ruby-Lambda-Funcs.md"}});var s={_frontmatter:o},b=r.a;function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(b,l({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ruby-lambda-functions"},"Ruby Lambda Functions"),Object(a.b)("p",null,"The basic gist of declaration and usage is to use the ",Object(a.b)("inlineCode",{parentName:"p"},"lambda")," keyword. Note that Lambda functions have subtle differences to Proc functions, although they both derive from the Proc object."),Object(a.b)("p",null,"The Lambda function enforces the number of arguments passed."),Object(a.b)("p",null,"In addition, Lambda and Proc functions treat the ",Object(a.b)("inlineCode",{parentName:"p"},"return")," differently. Lambda will return from the scope of that closure function, whereas Proc will return from the parent scope."),Object(a.b)("h2",{id:"simple-example"},"Simple Example"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),'# lambda.rb\nclass Lambda\n    def self.hello\n        helloWorld = lambda { return "Hello, World!" }\n        res = helloWorld.call\n    end\n\n    def self.sum(a, b)\n        sumLambda = lambda {|a,b| a + b }\n        res = sumLambda.call(a, b)\n    end\nend\n')),Object(a.b)("p",null,"Test file"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"# lambda_test.rb\nbegin\n  gem 'minitest', '>= 5.0.0'\n  require 'minitest/autorun'\n  require_relative 'lambda'\nrescue Gem::LoadError => e\n  puts \"\\nMissing Dependency:\\n#{e.backtrace.first} #{e.message}\"\n  puts 'Minitest 5.0 gem must be installed for the Ruby track.'\nrescue LoadError => e\n  puts \"\\nError:\\n#{e.backtrace.first} #{e.message}\"\n  puts DATA.read\n  exit 1\nend\n\n# Common test data version: 1.1.0 be3ae66\nclass LambdaTest < Minitest::Test\n  def test_hello_world_lambda\n    # skip\n    assert_equal \"Hello, World!\", Lambda.hello\n  end\n\n  def test_sum_lambda\n    # skip\n    assert_equal 3, Lambda.sum(1,2)\n  end\nend\n\n__END__\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby/Ruby-Lambda-Funcs.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-ruby-ruby-lambda-funcs-md-f7110a7d202eedcaf813.js.map