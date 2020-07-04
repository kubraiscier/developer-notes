(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{tUSy:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Go/Go-Dev-Guide.md"}});var o={_frontmatter:l},c=r.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,i({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"the-complete-go-developer-guide"},"The Complete Go Developer Guide"),Object(a.b)("h2",{id:"intro-to-the-go-cli"},"Intro to the Go CLI"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Command"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Action"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"go build"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Compiles go source files")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"go run"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Compiles and executes one or two files")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"go fmt"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Formats all go code in current directory")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"go install"),Object(a.b)("td",i({parentName:"tr"},{align:null}),'Compiles and "installs" a package')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"go get"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Downloads the raw source code of someone else's pacakge")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"go test"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Runs any tests associated with the current project")))),Object(a.b)("h2",{id:"hello-world"},"Hello World"),Object(a.b)("p",null,"Using the Go CLI, we can run a simple hello world as so."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\n/**\n * Basic hello world.\n * Run using go -o\n */\nfunc main() {\n  fmt.Println("Hi there!")\n}\n')),Object(a.b)("h2",{id:"go-packages"},"Go Packages"),Object(a.b)("p",null,"When you see lines like ",Object(a.b)("inlineCode",{parentName:"p"},"package main"),", that's like a workspace. "),Object(a.b)("p",null,"There are two types of packages in Golang: "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Executable: Generates a file that we can run."),Object(a.b)("li",{parentName:"ol"},'Reuseable: Code used as "helpers" -- a good place to put reusable login.')),Object(a.b)("p",null,"Take for example three files:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// main.go\npackage main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hi there!")\n}\n\n// support.go\npackage main\n\nfunc support() {\n  fmt.Println("Hi support!")\n}\n\n// helper.go\npackage main\n\nfunc helper() {\n  fmt.Println("Hi helper!")\n}\n')),Object(a.b)("p",null,"How can we tell the difference between whether we are creating a ",Object(a.b)("inlineCode",{parentName:"p"},"executable")," or ",Object(a.b)("inlineCode",{parentName:"p"},"reuseable")," type of package? It actually depends on whether you use the name ",Object(a.b)("inlineCode",{parentName:"p"},"package main"),". If you ran ",Object(a.b)("inlineCode",{parentName:"p"},"go build")," and you did not use ",Object(a.b)("inlineCode",{parentName:"p"},"package main"),", it will not spit out an executable file."),Object(a.b)("p",null,"Any executable package also needs a func called ",Object(a.b)("inlineCode",{parentName:"p"},"main"),"."),Object(a.b)("h2",{id:"variable-declarations"},"Variable Declarations"),Object(a.b)("p",null,"Variables in Go can generally be inferred from the right hand side. Linters will generally help you out with this."),Object(a.b)("p",null,"Shorthand declarations with initialisation can be done with ",Object(a.b)("inlineCode",{parentName:"p"},":="),", although it should be noted you can omit the ",Object(a.b)("inlineCode",{parentName:"p"},":")," when declaring new values for variables."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nfunc main() {\n  var card string = "Ace of spades"\n  easierCard := "Ace of hearts"\n  easierCard = "Five of Diamonds"\n}\n')),Object(a.b)("h2",{id:"functions-and-return-types"},"Functions and Return Types"),Object(a.b)("p",null,"The patter for declaring a return type is to name that return type after a func is called."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\nfunc main() {\n  card := newCard()\n\n  fmt.Println(card)\n}\n\nfunc newCard() string {\n  return "Ace of spades"\n}\n')),Object(a.b)("h2",{id:"slices-and-for-loops"},"Slices and For Loops"),Object(a.b)("p",null,"Go has two basic structures for handling lists: "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Array: fixed length list of things"),Object(a.b)("li",{parentName:"ol"},"Slice: an array that can grow or shrink")),Object(a.b)("p",null,"Every slice must also be of the same type."),Object(a.b)("p",null,"For a slice, we create it like so:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'func main() {\n  cards := []string{newCard()}\n  cards = append(cards, "Six of Spades")\n  \n  for i, card := range cards {\n  fmt.Println(i, card)\n  }\n}\n')),Object(a.b)("p",null,"Note that the cards variable is immutable and a new slice is returned when we use the ",Object(a.b)("inlineCode",{parentName:"p"},"append")," function to add to the slice."),Object(a.b)("p",null,"We can use the ",Object(a.b)("inlineCode",{parentName:"p"},"range")," keyword to iterate over a slice."),Object(a.b)("h2",{id:"object-oriented-approach-vs-go-approach"},"Object Oriented approach vs Go approach"),Object(a.b)("p",null,"Note that there are no classes in Go."),Object(a.b)("p",null,"In Go, what we do is declare a new type and then create ",Object(a.b)("inlineCode",{parentName:"p"},"functions with a receiver"),". This is a common pattern that repeats throughout Go courses."),Object(a.b)("p",null,"In practice, we can update the ",Object(a.b)("inlineCode",{parentName:"p"},"main.go")," file with a new type we create:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// main.go\npackage main\n\nfunc main() {\n  cards := deck{newCard()}\n  cards = append(cards, "Six of Spades")\n\n  cards.print()\n}\n\nfunc newCard() string {\n  return "Ace of spades"\n}\n\n// deck.go\npackage main\n\nimport "fmt"\n\n// Create a new type of \'deck\'\n// which is a slice of strings\ntype deck []string\n\n// Creating a receiver function\nfunc (d deck) print() {\n  for i, card := range d {\n  fmt.Println(i, card)\n  }\n}\n')),Object(a.b)("p",null,"It is important to note that if your other ",Object(a.b)("inlineCode",{parentName:"p"},"package main")," files are not in the ",Object(a.b)("inlineCode",{parentName:"p"},"$GOPATH")," that you need to include them during your run state ie ",Object(a.b)("inlineCode",{parentName:"p"},"go run main.go deck.go"),"."),Object(a.b)("h2",{id:"slice-range-syntax"},"Slice range syntax"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// [StartingAt : UpToButNotInclusive]\nslice := ["one", "two", "three"]\n// Get "one", "two"\nsliceRange := slice[0:2]\n// Same as...\nsliceRangeTwo  := [:2]\n// Get just the last\nsliceRangeThree := [2:]\n')),Object(a.b)("h2",{id:"returning-multiple-values"},"Returning multiple values"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),"// Use slices\nfunc deal(d deck, handSize int) (deck, deck) {\n  return d[:handSize], d[handSize:]\n}\n\nfunc main() {\n  cards := newDeck()\n\n  // init and assign return values\n  hand, remainingDeck := deal(cards, 5)\n  hand.print()\n  remainingDeck.print()\n}\n")),Object(a.b)("h2",{id:"converting-to-bite-slices-type-conversion"},"Converting to bite slices (type conversion)"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'byteSlice := []byte("Hi there")\n')),Object(a.b)("h2",{id:"writing-to-file"},"Writing to file"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// main.go\npackage main\n\nfunc main() {\n  cards := newDeck()\n  cards.saveToFile("my_cards")\n}\n\n// deck.go\n\n// omit newDeck()\nfunc (d deck) saveToFile(filename string) error {\n   return ioutil.WriteFile(filename, []byte(d.toString()), 0666)\n}\n')),Object(a.b)("h2",{id:"reading-from-hard-drive"},"Reading from hard drive"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// main.go\n// main.go\npackage main\n\nfunc main() {\n  cards := newDeckFromFile("my_cards")\n  cards.print()\n}\n\n// deck.go\nfunc newDeckFromFile(filename string) deck {\n    // bs = byteSlice\n    bs, err := ioutil.ReadFile(filename)\n    if err != nil {\n        fmt.Println("Error:", err)\n        os.Exit(1)\n    }\n\n    s := strings.Split(string(bs), ",")\n    return deck(s)\n}\n')),Object(a.b)("h2",{id:"shuffling-a-deck"},"Shuffling a Deck"),Object(a.b)("p",null,"There is no inbuilt function to randomise a slice."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// main.go\npackage main\nimport (\n  "math/rand"\n  "time"\n)\n\n// Use slices\nfunc deal(d deck, handSize int) (deck, deck) {\n  return d[:handSize], d[handSize:]\n}\n\nfunc (d deck) shuffle() {\n  source := rand.NewSource(time.Now().UnixNano())\n  r := rand.New(source)\n\n  for i := range d {\n    newPosition := r.Intn(len(d) - 1)\n\n    // fancy one line swap\n    d[i], d[newPosition] = d[newPosition], d[i]\n  }\n}\n\nfunc main() {\n   func main() {\n     cards := newDeck()\n\n     // init and assign return values\n     cards.shuffle()\n     cards.print()\n   }\n}\n')),Object(a.b)("h2",{id:"testing-with-go"},"Testing with Go"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// deck_test.go\npackage main\n\nimport "testing"\n\nfunc TestNewDeck(t *testing.T) {\n  d := newDeck()\n\n  if len(d) != 16 {\n    t.Errorf("Expected deck length of 16, but got %v", len(d))\n  }\n}\n')),Object(a.b)("h3",{id:"asserting-elements"},"Asserting Elements"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// deck_test.go\npackage main\n\nimport "testing"\n\nfunc TestNewDeck(t *testing.T) {\n  d := newDeck()\n\n  if len(d) != 16 {\n    t.Errorf("Expected deck length of 16, but got %v", len(d))\n  }\n\n  if d[0] != "Ace of Spaces" {\n    t.Errorf("Expected first card of Ace of Spaces, but got %v", d[0]);\n  }\n\n  if d[len(d-1)] != "Four of Clubs" {\n    t.Errorf("Expected first card of Four of Clubs, but got %v", d[len(d-1)]);\n  }\n}\n')),Object(a.b)("h3",{id:"clean-up-for-file-writing"},"Clean up for file writing"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'// deck_test.go\npackage main\n\nimport (\n  "testing"\n  "os"\n)\n\nfunc TestNewDeck(t *testing.T) {\n  d := newDeck()\n\n  if len(d) != 16 {\n    t.Errorf("Expected deck length of 16, but got %v", len(d))\n  }\n\n  if d[0] != "Ace of Spaces" {\n    t.Errorf("Expected first card of Ace of Spaces, but got %v", d[0]);\n  }\n\n  if d[len(d-1)] != "Four of Clubs" {\n    t.Errorf("Expected first card of Four of Clubs, but got %v", d[len(d-1)]);\n  }\n}\n\n// although long name, the test \nfunc TestSaveToDeckAndNewDeckFromFile(t *testing.T) {\n  os.Remove("_decktesting")\n\n  d := new Deck()\n  d.saveToFile("_decktesting")\n\n  loadedDeck := newDeckFromFile("_decktesting")\n\n  if len(loadedDeck) != 16 {\n    t.Errorf("Expected 16 cards in deck, got %v", len(loadedDeck))\n  }\n\n  os.Remove("_decktesting")\n}\n')),Object(a.b)("h2",{id:"structs-in-go"},"Structs in Go"),Object(a.b)("p",null,"Structs are a collection of different properties linked with a particular purpose."),Object(a.b)("p",null,'If we want to convert the string "Ace of Spaces" to become more flexible and as a structure, we could create a struct:'),Object(a.b)("p",null,"If you init a struct with no values, the zero values are assigned as the following:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Zero Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:null}),'""')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"int"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"0")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"float"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"0")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"bool"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"false")))),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'type card struct {\n  house string\n  value string\n}\n\n// usage\nfunc main() {\n  card := card{"Spaces", "Ace"}\n  // being more definitive\n  cardTwo := card{house: "Spaces", value: "Ace"}\n  fmt.Println(card)\n\n  // non-init - sets the zero value\n  // %+v will print out all field names and values\n  var cardThree card\n  fmt.Printf("%+v", cardThree)\n}\n')),Object(a.b)("h2",{id:"embedding-structs"},"Embedding Structs"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'type contactInfo struct {\n  email string\n  zipCode int\n}\n\ntype person struct {\n  firstName string\n  lastName string\n  contactInfo\n}\n\nfunc main() {\n  jim := person{\n    firstName: "Jim",\n    lastName: "Party",\n    contactInfo: contactInfo{\n      email: "jim@gmail.com",\n      zipCode: 94000\n    }\n  }\n\n  fmt.Printf("%+v", jim)\n  // same as\n  jim.print()\n\n  // Update name\n  jim.updateNameIncorrect("jimmy")\n  jim.print() // still shows jim instead of jimmy\n\n  // Correct\n  jimPointer := &jim\n  jimPointer.updateName("jimmy")\n  jim.print() // prints jimmy\n\n  // Also works - shortcut for the receiver\n  jim.updatename("jimmy")\n  jim.print()\n}\n\nfunc (p person) print() {\n  fmt.Printf("%+v", p)\n}\n\n// updateName without a pointer\nfunc (p person) updateNameIncorrect(newFirstName string) {\n  p.firstName = newFirstname\n}\n\n// updateName correctly\n// note that taking *type means we\'re working with a pointer\n// *variable means we want to manipulate the value it is pointing at\nfunc (p *person) updateName(newFirstName string) {\n  (*p).firstName = newFirstname\n}\n')),Object(a.b)("h2",{id:"pointer-operations"},"Pointer operations"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Turn ",Object(a.b)("inlineCode",{parentName:"li"},"address")," into ",Object(a.b)("inlineCode",{parentName:"li"},"value")," with ",Object(a.b)("inlineCode",{parentName:"li"},"*address")),Object(a.b)("li",{parentName:"ul"},"Turn ",Object(a.b)("inlineCode",{parentName:"li"},"value")," into ",Object(a.b)("inlineCode",{parentName:"li"},"address")," with ",Object(a.b)("inlineCode",{parentName:"li"},"&value")),Object(a.b)("li",{parentName:"ul"},"Note that with slices vs structs, you can manipulate the slice directly without having to use a pointer, unlike structs."),Object(a.b)("li",{parentName:"ul"},"Slices with the underlying array get copied, but the array points to the same addresses.")),Object(a.b)("h3",{id:"reference-vs-value-types"},"Reference vs Value Types"),Object(a.b)("p",null,"Use pointers for value types, don't worry about it for reference types."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Value types"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Reference types"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"int"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"slices")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"float"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"maps")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"channels")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"bool"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"pointers")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"structs"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"functions")))),Object(a.b)("h2",{id:"maps"},"Maps"),Object(a.b)("p",null,"Maps are similar to structs, but have some differences. These are basically ",Object(a.b)("inlineCode",{parentName:"p"},"key:value")," pairs."),Object(a.b)("p",null,"These are comparable to ",Object(a.b)("inlineCode",{parentName:"p"},"hash")," in Ruby, ",Object(a.b)("inlineCode",{parentName:"p"},"object")," in JavaScript or ",Object(a.b)("inlineCode",{parentName:"p"},"Dict")," in Python."),Object(a.b)("p",null,"For a map, the keys all need to be the same type, and the values all need to be the same type."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n  "fmt\n)\n\nfunc main() {\n  // map: declare new map\n  // [string]: keys are type string\n  // string: values are type string\n  colors := map[string]string {\n    "red": "#ff0000",\n    "green": "#4b9000"\n  }\n\n  fmt.Println(colors)\n}\n')),Object(a.b)("p",null,"Creating a zero value map can be done basically in two ways:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'var colors map[string]string\ncolorsEq = make(map[string]string)\n\n// adding in values\ncolorsEq["white"] = "#ffffff"\n')),Object(a.b)("p",null,"We MUST use square braces to access map values, NOT dot notation."),Object(a.b)("h2",{id:"iterating-over-maps"},"Iterating Over Maps"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'colors := map[string]string {\n  "red": "#ff0000",\n  "green": "#4b9000"\n}\n\n\nfunc printMap(c map[string]string) {\n  for color, hex := range c {\n    fmt.Println("Hex code for", color, "is", hex)\n  }\n}\n')),Object(a.b)("h2",{id:"maps-vs-structs"},"Maps Vs Structs"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Maps"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Structs"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"All keys must be same type"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Values can be different types")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Use to represent a collection of related properties"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Need to know all the different fields at compile time")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"All values must be the same type"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Keys don't support indexing")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Don't need to know all keys at compile time"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Use to represent a ",Object(a.b)("inlineCode",{parentName:"td"},"thing")," with a lot of properties")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Keys are indexed - can iterate over them"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Value type!")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Reference type !"),Object(a.b)("td",i({parentName:"tr"},{align:null}))))),Object(a.b)("h2",{id:"interfaces"},"Interfaces"),Object(a.b)("p",null,"The following example shows similar types but returning different values."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\ntype englishBot struct {}\ntype spanishBot struct {}\n\n//\ntype bot interface {\n  getGreeting() string\n}\n\nfunc main() {\n  eb := englishBot()\n  sb := spanishBot()\n\n  printGreeting(eb)\n  printGreeting(sb)\n}\n\nfunc (eb englishBot) getGreeting() string {\n  // assume very custom logic to prove diff to spanishBot\n  return "Hi There!"\n}\n\nfunc (sb spanishBot) getGreeting() string {\n  // assume very custom logic to prove diff to spanishBot\n  return "Hola!"\n}\n\n// any type that implements getGreeting is now an "honorary" member of type bot\nfunc printGreet(b bot) {\n  fmt.Println(b.getGreeting())\n}\n')),Object(a.b)("p",null,"More complex interfaces in Go might have signatures like the following:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),"type bot interface {\n  getGreeting(string,int) (string, error)\n}\n")),Object(a.b)("p",null,'If you want to set more "qualifiers" to conform to the interface, you can add more methods to the signature:'),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),"type bot interface {\n  getGreeting(string,int) (string, error)\n  getBotVersion() float64\n  respondToUser(user) string\n}\n")),Object(a.b)("p",null,"You can only create values out of the concrete types and not interface types."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Interfaces are not generic types (other langs have them, Go famously does not)."),Object(a.b)("li",{parentName:"ul"},'Interfaces are "implicit", we don\'t have to say a custom type satisfies some interface.'),Object(a.b)("li",{parentName:"ul"},"Interfaces are a contract to help us manage types.")),Object(a.b)("h2",{id:"http-package"},"HTTP Package"),Object(a.b)("p",null,"Using http and getting a body response back and helping us understanding how structs work a little better."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Diagram of how to access return body",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1550201024/developer-notes/Screen_Shot_2019-02-15_at_2.22.59_pm.png"})),Object(a.b)("p",null,"If we use an interface as a property of a struct, we can add any property there as long as it conforms to the interface."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),"type example interface {\n  Reader\n}\n\ntype resp struct {\n  propOne example\n}\n")),Object(a.b)("p",null,"We can also assemble multiple interfaces together to create another interface where all requirements need to be satisfied:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),"type reader interface {}\ntype closer interface {}\n\ntype readCloser interface {\n  reader\n  closer\n}\n")),Object(a.b)("p",null,"For an application of this in action with the http.Get func:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n  "fmt"\n  "net/http"\n  "os"\n  "io"\n)\n\nfunc main() {\n  resp, err := http.Get("https://google.com")\n  if err != nil {\n    fmt.Println("Error:", err)\n    os.Exit(1)\n  }\n\n  // Note: Reader interface manipulates byte slice -- it doesn\'t return it. Go also has easier help functions to simply reading responses.\n  bs := make([]byte, 99999)\n  resp.Body.Read(bs)\n  fmt.Println(string(bs))\n}\n')),Object(a.b)("p",null,"In order to prevent ourselves from having to manually create a byte slice each time, we can use the ",Object(a.b)("inlineCode",{parentName:"p"},"io.Copy")," function instead. The method signature for this requires a destination that implements the ",Object(a.b)("inlineCode",{parentName:"p"},"Writer")," interface and a source that implements the ",Object(a.b)("inlineCode",{parentName:"p"},"Reader")," interface."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n  "fmt"\n  "net/http"\n  "os"\n  "io"\n)\n\nfunc main() {\n  resp, err := http.Get("https://google.com")\n  if err != nil {\n    fmt.Println("Error:", err)\n    os.Exit(1)\n  }\n\n  // Updated code to simplify the process and print the resp.Body to Stdout\n  io.Copy(os.Stdout, resp.Body)\n}\n')),Object(a.b)("p",null,"With everything that we have learned so far about how ",Object(a.b)("inlineCode",{parentName:"p"},"io.Copy")," works, let's create something that implements the ",Object(a.b)("inlineCode",{parentName:"p"},"Writer")," interface:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n  "fmt"\n  "net/http"\n  "os"\n  "io"\n)\n\ntype logWriter struct {}\n\nfunc main() {\n  resp, err := http.Get("https://google.com")\n  if err != nil {\n    fmt.Println("Error:", err)\n    os.Exit(1)\n  }\n\n  lw := logWriter{}\n\n  // Updated code to simplify the process and print the resp.Body to Stdout\n  io.Copy(lw, resp.Body)\n}\n\nfunc (logWriter) Write(bs []byte) (int, error) {\n  fmt.Println(string(bs))\n  fmt.Println("Just wrote this many bytes", len(bs))\n  return len(bs), nil\n}\n')),Object(a.b)("h2",{id:"channels-and-go-routines"},"Channels and Go Routines"),Object(a.b)("p",null,"Both channels and go routines are used for cocurrency programming."),Object(a.b)("p",null,"The project for this particular example will use a status checker."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Project layout",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1550533610/developer-notes/Screen_Shot_2019-02-19_at_9.59.38_am.png"})),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n  "io/http"\n)\n\nfunc main() {\n  ws := []string{"http://google.com", "http://amazon.com", "http://facebook.com"}\n\n  for _, link := range ws {\n    checkLink(link)\n  }\n}\n\n// this implementation will be synchronous\nfunc checkLink(link string) {\n  _, err := http.Get(link)\n  if err != nil {\n    fmt.Println(link, "might be down!")\n    return\n  }\n\n  fmt.Println(link, "is up!")\n}\n')),Object(a.b)("p",null,"If we think of the main function as the ",Object(a.b)("inlineCode",{parentName:"p"},"main go routine"),", we can start to imagine the above working sequentially as a result. In order to create new go routines, we can use the keyword ",Object(a.b)("inlineCode",{parentName:"p"},"go"),"."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n  "io/http"\n)\n\nfunc main() {\n  ws := []string{\n    "http://google.com",\n    "http://amazon.com",\n    "http://facebook.com"\n  }\n\n  for _, link := range ws {\n    // creates new Go routine\n    go checkLink(link)\n  }\n}\n\n// this implementation will be synchronous\nfunc checkLink(link string) {\n  _, err := http.Get(link)\n  if err != nil {\n    fmt.Println(link, "might be down!")\n    return\n  }\n\n  fmt.Println(link, "is up!")\n}\n')),Object(a.b)("h3",{id:"go-scheduler-behind-the-scenes"},"Go Scheduler Behind The Scenes"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Go scheduler",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1550533611/developer-notes/Screen_Shot_2019-02-19_at_10.46.20_am.png"})),Object(a.b)("p",null,"Not that with one CPU, the Go scheduler runs ",Object(a.b)("inlineCode",{parentName:"p"},"one")," routine until finished or hits a blocking call. If a blocking call is hit, the scheduler pausing execution on a routine and starts the next one."),Object(a.b)("p",null,'If we insteads have multiple cores, the scheduler runs one thread on each "logical" core. This then truly runs multiple routines at the same time.'),Object(a.b)("p",null,"By default, Go tries to use one core."),Object(a.b)("p",null,"In Go, you will constantly see ",Object(a.b)("inlineCode",{parentName:"p"},"concurrency is not parallelism"),". Concurrency is the case of multiple threads executing code. "),Object(a.b)("p",null,"If one thread blocks, another one is picked up and worked out. Parallelism is the use of multiple physical CPU cores at the same time."),Object(a.b)("h3",{id:"returning-from-go-routines"},"Returning from Go routines"),Object(a.b)("p",null,"In order to get back to the ",Object(a.b)("inlineCode",{parentName:"p"},"main")," routine from child routines, we need to update the code to handle channels for communication."),Object(a.b)("p",null,"Each ",Object(a.b)("inlineCode",{parentName:"p"},"channel")," communicates with a particular type - something incredibly important."),Object(a.b)("h3",{id:"sending-data-with-channels"},"Sending Data with Channels"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Syntax"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Action"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"channel <- 5")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Send value 5 into this channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"myNumber <- channel")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Wait for value to be sent into the channel. When we get one, assign the value to 'myNumber'")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"fmt.Println(<- channel)")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Wait for value to be sent into channel. When we get one, log it out immediately")))),Object(a.b)("p",null,"One of the challenging concepts with channels is that each message coming back from a channel is also ",Object(a.b)("inlineCode",{parentName:"p"},"blocking")," code. This means that for every iteration that uses a channel, it is important to have the appropriate amount of receivers ready on the main routine."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n  "io/http"\n)\n\nfunc main() {\n  ws := []string{\n    "http://google.com",\n    "http://amazon.com",\n    "http://facebook.com"\n  }\n\n  // creating a channel\n  c := make(chan string)\n\n  for _, link := range ws {\n    // creates new Go routine - pass in a channel link\n    go checkLink(link, c)\n  }\n\n  // note that to receive, we need to handle all changes\n  // this is creating an infinite loop for all go routines receiving a value\n  for {\n    go checkLink(<-c, c)\n  }\n}\n\n// this implementation will be synchronous\n// you must now declare the channel and channel type\nfunc checkLink(link string, c chan string) {\n  _, err := http.Get(link)\n  if err != nil {\n    fmt.Println(link, "might be down!")\n    c <- link\n    return\n  }\n\n  fmt.Println(link, "is up!")\n  c <- link\n}\n')),Object(a.b)("h3",{id:"alternative-loop-syntax"},"Alternative loop syntax"),Object(a.b)("p",null,"So we don't want to continually ping a request, we can update the control loop with the following:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n  "io/http"\n)\n\nfunc main() {\n  ws := []string{\n    "http://google.com",\n    "http://amazon.com",\n    "http://facebook.com"\n  }\n\n  // creating a channel\n  c := make(chan string)\n\n  for _, link := range ws {\n    // creates new Go routine - pass in a channel link\n    go checkLink(link, c)\n  }\n\n  // note that to receive, we need to handle all changes\n  // this is creating an infinite loop for all go routines receiving a value\n  // this range loop is equivalent to the above for loop\n  for l := range c {\n    go checkLink(l, c)\n  }\n}\n\n// this implementation will be synchronous\n// you must now declare the channel and channel type\nfunc checkLink(link string, c chan string) {\n  _, err := http.Get(link)\n  if err != nil {\n    fmt.Println(link, "might be down!")\n    c <- link\n    return\n  }\n\n  fmt.Println(link, "is up!")\n  c <- link\n}\n')),Object(a.b)("h3",{id:"sleeping-a-routine"},"Sleeping a routine"),Object(a.b)("p",null,"We sleep a routine in order to generate a pause."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n  "io/http"\n  "time"\n)\n\nfunc main() {\n  ws := []string{\n    "http://google.com",\n    "http://amazon.com",\n    "http://facebook.com"\n  }\n\n  // creating a channel\n  c := make(chan string)\n\n  for _, link := range ws {\n    // creates new Go routine - pass in a channel link\n    go checkLink(link, c)\n  }\n\n  // note that to receive, we need to handle all changes\n  // this is creating an infinite loop for all go routines receiving a value\n  // this range loop is equivalent to the above for loop\n  for l := range c {\n    // invoke function literal\n    // ensure to pass the argument to have a copy in memory\n    go func(link string) {\n      time.Sleep(5*time.Second)\n      checkLink(link, c)\n    }(l)\n  }\n}\n\n// this implementation will be synchronous\n// you must now declare the channel and channel type\nfunc checkLink(link string, c chan string) {\n  _, err := http.Get(link)\n  if err != nil {\n    fmt.Println(link, "might be down!")\n    c <- link\n    return\n  }\n\n  fmt.Println(link, "is up!")\n  c <- link\n}\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Go-Dev-Guide.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-go-go-dev-guide-md-ec6f1b4a40b0092b0d8c.js.map