(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{gGrz:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Elixir/Elixir-SQL.md"}});var c={_frontmatter:i},s=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"elixir-sql"},"Elixir SQL"),Object(a.b)("p",null,"To do this, we use another Open Source project named Ecto."),Object(a.b)("h2",{id:"model-file-for-postgres"},"Model File for Postgres"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-elixir"}),'defmodule Discuss.Topic do\n  use Discuss.Web, :model\n\n  # required for model file\n  schema "topics" do\n    field :title, :string\n  end\n\n  # second requirement\n  def changeset(struct, params \\\\ %{}) dp\n    struct\n    |> cast(params, [:title])\n    |> validate_required([:title])\n  end\nend\n')),Object(a.b)("p",null,"Validation in Phoenix is a little more challenging than it needs to be."),Object(a.b)("h3",{id:"the-elixir-pattern"},"The Elixir Pattern"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Struct: A hash that contains some data. Represents a record (or a record we want to save) in the database"),Object(a.b)("li",{parentName:"ul"},"Params: A hash that contains the properties we want to update the struct with"),Object(a.b)("li",{parentName:"ul"},"cast: produces a changeset (comes from inside of Phoenix)"),Object(a.b)("li",{parentName:"ul"},"validators: adds errors to changeset")),Object(a.b)("p",null,"The changeset is the object that records the updates in our database that we need to make to take what it is right now (struct) to what it needs to be (params)."),Object(a.b)("h3",{id:"more-on-changesets"},"More On Changesets"),Object(a.b)("p",null,"Note that ",Object(a.b)("inlineCode",{parentName:"p"},"params \\\\ %{}")),Object(a.b)("h2",{id:"ectochangeset"},"Ecto.Changeset"),Object(a.b)("h2",{id:"ectorepo"},"Ecto.Repo"),Object(a.b)("p",null,"Ecto is responsible with all the ",Object(a.b)("inlineCode",{parentName:"p"},"Repo")," module that is responsible for all conversations with the database."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-elixir"}),'def create(conn, %{"topic" => topic}) do\n  changeset = Topic.changeset(%Topic{}. topic)\n\n  case Repo.insert(changeset) do\n    {:ok, post} -> IO.inspect(post)\n    {:error, changeset} -> IO.inspect(changeset)\n  end\nend\n')),Object(a.b)("h2",{id:"using-the-repo-module-for-queries"},"Using the Repo module for queries"),Object(a.b)("p",null,"Use the link for ",Object(a.b)("a",o({parentName:"p"},{href:"hexdocs.pm/ecto"}),"Ecto")," to get more information."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-elixir"}),"def index(conn, _params) do\n\nend\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Elixir/Elixir-SQL.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-elixir-elixir-sql-md-736dbdf9fddc09d289bc.js.map