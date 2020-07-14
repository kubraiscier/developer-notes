(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{lOxj:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return r})),t.d(e,"default",(function(){return o}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Ruby/Ruby-Constructors.md"}});var l={_frontmatter:r},d=i.a;function o(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,i={},s=Object.keys(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,["components"]);return Object(a.b)(d,s({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ruby-contructors"},"Ruby Contructors"),Object(a.b)("p",null,"The important constructor method is the ",Object(a.b)("inlineCode",{parentName:"p"},"initialize")," method."),Object(a.b)("h2",{id:"tldr"},"tl;dr"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-ruby"}),'class Employee\n\n  # change scope to public\n  public\n\n  # static class variable\n  @@count = 0\n\n  # constructor\n  def initialize(name, designation, salary)\n    @name = name\n    @designation = designation\n    @salary = salary\n    @@count += 1\n  end\n\n  # class method\n  def self.count\n    @@count\n  end\n\n  # getters/setters for name, designation, and salary\n  def name\n    @name\n  end\n\n  def name=(name)\n    @name = name\n  end\n\n  def designation\n    @designation\n  end\n\n  def designation=(designation)\n    @designation = designation\n  end\n\n  def salary\n    @salary\n  end\n\n  def salary=(salary)\n    @salary = salary\n  end\n\n  # change scope to private\n  private\n\n  def organization\n    "Hackers de Anonymous"\n  end\n\n  # change scope to protected\n  protected\n\n  def owner\n    "We never mention his name!"\n  end\n\nend\n')),Object(a.b)("h3",{id:"inheritance"},"Inheritance"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-ruby"}),"class SoftwareEngineer < Employee\n\n  # code for SoftwareEngineer class\n\nend\n")),Object(a.b)("h3",{id:"attribute-accessors"},"Attribute accessors"),Object(a.b)("p",null,"For what is readable/writable:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-ruby"}),'class Employee\n\n  attr_accessor :name, :designation, :salary\n\n  @@count = 0\n\n  def initialize(name, designation, salary)\n    @name = name\n    @designation = designation\n    @salary = salary\n    @@count += 1\n  end\n\n  def self.count\n    @@count\n  end\n\n  private\n\n  def organization\n    "Hackers de Anonymous"\n  end\n\n  protected\n\n  def owner\n    "We never mention his name!"\n  end\n\nend\n')),Object(a.b)("h2",{id:"simple-example"},"Simple Example"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-ruby"}),'# Ruby program to initialize instance\n# variable using constructor\n\n#!/usr/bin/ruby\n\n# class name\nclass Geeks\n    # constructor\n    def initialize\n\n        # instance variable intialzation\n        @inst_1 = "GeeksforGeeks"\n        @inst_2 = "Sudo Placement"\n    end\n\n    # display method\n    def display\n        puts "Value of First instance variable is: #{@inst_1}"\n        puts "Value of Second instance variable is: #{@inst_2}"\n    end\nend\n\n# creating object\nobj1 = Geeks.new()\n\n# calling display method\nobj1.display()\n')),Object(a.b)("h2",{id:"linked-list-example"},"Linked List Example"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-ruby"}),"\"\"\"\nBasic implementation without all methods\n\"\"\"\n\nclass LinkedList\n    def initialize(head=nil)\n        if head.nil?\n            @size = 0\n        else\n            @size = 1\n        end\n        @head = head\n    end\n\n    def getSize\n        @size\n    end\n\n    def insertFirst(n)\n        if @head.nil?\n            @head = n\n        else\n            tmp = @head\n            @head = n\n            n.setNext(tmp)\n        end\n        @size += 1\n    end\n\n    def clear\n        @head = nil\n        @size = 0\n    end\n\n    def getFirst\n        @head\n    end\nend\n\nclass Node\n    def initialize(data = nil)\n        @data = data\n        @next = nil\n    end\n\n    def getNext\n        @next\n    end\n\n    def setNext(n)\n        @next = n\n    end\nend\n\n# test Ruby file\nbegin\n  gem 'minitest', '>= 5.0.0'\n  require 'minitest/autorun'\n  require_relative 'linked_list'\nrescue Gem::LoadError => e\n  puts \"\\nMissing Dependency:\\n#{e.backtrace.first} #{e.message}\"\n  puts 'Minitest 5.0 gem must be installed for the Ruby track.'\nrescue LoadError => e\n  puts \"\\nError:\\n#{e.backtrace.first} #{e.message}\"\n  puts DATA.read\n  exit 1\nend\n\n# Common test data version: 1.1.0 be3ae66\nclass LinkedListTest < Minitest::Test\n  def test_get_size\n    # skip\n    n1 = Node.new(1)\n    ll = LinkedList.new(n1)\n    assert_equal 1, ll.getSize()\n  end\n\n  def test_insert_first\n    # skip\n    n1 = Node.new(1)\n    n2 = Node.new(1)\n    ll = LinkedList.new(n1)\n    ll.insertFirst(n2)\n    assert_equal 2, ll.getSize()\n  end\n\n  def test_clear\n    # skip\n    n1 = Node.new(1)\n    n2 = Node.new(1)\n    ll = LinkedList.new(n1)\n    ll.insertFirst(n2)\n    ll.clear()\n    assert_equal 0, ll.getSize()\n    assert_nil nil, ll.getFirst()\n  end\nend\n\n__END__\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby/Ruby-Constructors.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-ruby-ruby-constructors-md-14e865095aac01a0ad08.js.map