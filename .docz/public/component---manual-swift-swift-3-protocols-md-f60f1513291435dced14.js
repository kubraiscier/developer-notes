(window.webpackJsonp=window.webpackJsonp||[]).push([[615],{"K80+":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Swift/Swift-3-Protocols.md"}});var l={_frontmatter:i},c=a.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(c,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"swift-3-protocols"},"Swift 3 Protocols"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#swift-3-protocols"}),"Swift 3 Protocols"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#protocols"}),"Protocols"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#-----protocol-functions"}),"---- Protocol functions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#-----initialiser-requirements"}),"---- Initialiser Requirements")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#-----protocol-delegation"}),"---- Protocol Delegation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#-----protocol-conformance"}),"---- Protocol Conformance")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#-----protocol-inheritance"}),"---- Protocol Inheritance")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#-----protocol-composition"}),"---- Protocol Composition")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#-----protocol-conformance-1"}),"---- Protocol Conformance"))))))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"protocols"},"Protocols"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-swift"}),'protocol FullyNamed {\n    var fullName: String { get }\n}\n\nstruct Person: FullyNamed {\n    var fullName: String\n}\nlet john = Person(fullName: "John Appleseed")\n// john.fullName is "John Appleseed"\n\nclass Starship: FullyNamed {\n    var prefix: String?\n    var name: String\n    init(name: String, prefix: String? = nil) {\n        self.name = name\n        self.prefix = prefix\n    }\n    var fullName: String {\n        return (prefix != nil ? prefix! + " " : "") + name\n    }\n}\nvar ncc1701 = Starship(name: "Enterprise", prefix: "USS")\n// ncc1701.fullName is "USS Enterprise"\n')),Object(r.b)("h2",{id:"protocol-functions"},"Protocol functions"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"protocol RandomNumberGenerator {\n    func random() -> Double\n}\n\nprotocol Togglable {\n    mutating func toggle()\n}\n\nenum OnOffSwitch: Togglable {\n    case off, on\n    mutating func toggle() {\n        switch self {\n        case .off:\n            self = .on\n        case .on:\n            self = .off\n        }\n    }\n}\nvar lightSwitch = OnOffSwitch.off\nlightSwitch.toggle()\n// lightSwitch is now equal to .on\n")),Object(r.b)("h2",{id:"initialiser-requirements"},"Initialiser Requirements"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"protocol SomeProtocol {\n    init(someParameter: Int)\n}\n\nclass SomeClass: SomeProtocol {\n    required init(someParameter: Int) {\n        // initializer implementation goes here\n    }\n}\n")),Object(r.b)("p",null,"There are also required overrides."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'protocol SomeProtocol {\n    init()\n}\n\nclass SomeSuperClass {\n    init() {\n        // initializer implementation goes here\n    }\n}\n\nclass SomeSubClass: SomeSuperClass, SomeProtocol {\n    // "required" from SomeProtocol conformance; "override" from SomeSuperClass\n    required override init() {\n        // initializer implementation goes here\n    }\n}\n')),Object(r.b)("h2",{id:"protocol-delegation"},"Protocol Delegation"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'protocol DiceGame {\n    var dice: Dice { get }\n    func play()\n}\n\nprotocol DiceGameDelegate {\n    func gameDidStart(_ game: DiceGame)\n    func game(_ game: DiceGame, didStartNewTurnWithDiceRoll diceRoll: Int)\n    func gameDidEnd(_ game: DiceGame)\n}\n\nclass SnakesAndLadders: DiceGame {\n    let finalSquare = 25\n    let dice = Dice(sides: 6, generator: LinearCongruentialGenerator())\n    var square = 0\n    var board: [Int]\n    init() {\n        board = Array(repeating: 0, count: finalSquare + 1)\n        board[03] = +08; board[06] = +11; board[09] = +09; board[10] = +02\n        board[14] = -10; board[19] = -11; board[22] = -02; board[24] = -08\n    }\n    var delegate: DiceGameDelegate?\n    func play() {\n        square = 0\n        delegate?.gameDidStart(self)\n        gameLoop: while square != finalSquare {\n            let diceRoll = dice.roll()\n            delegate?.game(self, didStartNewTurnWithDiceRoll: diceRoll)\n            switch square + diceRoll {\n            case finalSquare:\n                break gameLoop\n            case let newSquare where newSquare > finalSquare:\n                continue gameLoop\n            default:\n                square += diceRoll\n                square += board[square]\n            }\n        }\n        delegate?.gameDidEnd(self)\n    }\n}\n\nclass DiceGameTracker: DiceGameDelegate {\n    var numberOfTurns = 0\n    func gameDidStart(_ game: DiceGame) {\n        numberOfTurns = 0\n        if game is SnakesAndLadders {\n            print("Started a new game of Snakes and Ladders")\n        }\n        print("The game is using a \\(game.dice.sides)-sided dice")\n    }\n    func game(_ game: DiceGame, didStartNewTurnWithDiceRoll diceRoll: Int) {\n        numberOfTurns += 1\n        print("Rolled a \\(diceRoll)")\n    }\n    func gameDidEnd(_ game: DiceGame) {\n        print("The game lasted for \\(numberOfTurns) turns")\n    }\n}\n\nlet tracker = DiceGameTracker()\nlet game = SnakesAndLadders()\ngame.delegate = tracker\ngame.play()\n// Started a new game of Snakes and Ladders\n// The game is using a 6-sided dice\n// Rolled a 3\n// Rolled a 5\n// Rolled a 4\n// Rolled a 5\n// The game lasted for 4 turns\n')),Object(r.b)("h2",{id:"protocol-conformance"},"Protocol Conformance"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'protocol TextRepresentable {\n    var textualDescription: String { get }\n}\n\nextension Dice: TextRepresentable {\n    var textualDescription: String {\n        return "A \\(sides)-sided dice"\n    }\n}\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Declaring Protocol Adoption with an Extension")),Object(r.b)("p",null,"If a type already conforms to all of the requirements of a protocol, but has not yet stated that it adopts that protocol, you can make it adopt the protocol with an empty extension:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'struct Hamster {\n    var name: String\n    var textualDescription: String {\n        return "A hamster named \\(name)"\n    }\n}\nextension Hamster: TextRepresentable {}\n\n// Instances of Hamster can now be used wherever TextRepresentable is the required type:\n\nlet simonTheHamster = Hamster(name: "Simon")\nlet somethingTextRepresentable: TextRepresentable = simonTheHamster\nprint(somethingTextRepresentable.textualDescription)\n// Prints "A hamster named Simon"\n')),Object(r.b)("p",null,"You can also create Collections of Protocol Types:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"let things: [TextRepresentable] = [game, d12, simonTheHamster]\n\nfor thing in things {\n    print(thing.textualDescription)\n}\n// A game of Snakes and Ladders with 25 squares\n// A 12-sided dice\n// A hamster named Simon\n")),Object(r.b)("h2",{id:"protocol-inheritance"},"Protocol Inheritance"),Object(r.b)("p",null,"A protocol can inherit one or more other protocols and can add further requirements on top of the requirements it inherits. The syntax for protocol inheritance is similar to the syntax for class inheritance, but with the option to list multiple inherited protocols, separated by commas:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"protocol InheritingProtocol: SomeProtocol, AnotherProtocol {\n    // protocol definition goes here\n}\n\nprotocol PrettyTextRepresentable: TextRepresentable {\n    var prettyTextualDescription: String { get }\n}\n")),Object(r.b)("h2",{id:"protocol-composition"},"Protocol Composition"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'protocol Named {\n    var name: String { get }\n}\nprotocol Aged {\n    var age: Int { get }\n}\nstruct Person: Named, Aged {\n    var name: String\n    var age: Int\n}\nfunc wishHappyBirthday(to celebrator: Named & Aged) {\n    print("Happy birthday, \\(celebrator.name), you\'re \\(celebrator.age)!")\n}\nlet birthdayPerson = Person(name: "Malcolm", age: 21)\nwishHappyBirthday(to: birthdayPerson)\n// Prints "Happy birthday, Malcolm, you\'re 21!"\n')),Object(r.b)("h2",{id:"protocol-conformance-1"},"Protocol Conformance"),Object(r.b)("p",null,"How to check if a class conforms?"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'protocol HasArea {\n    var area: Double { get }\n}\n\nclass Circle: HasArea {\n    let pi = 3.1415927\n    var radius: Double\n    var area: Double { return pi * radius * radius }\n    init(radius: Double) { self.radius = radius }\n}\nclass Country: HasArea {\n    var area: Double\n    init(area: Double) { self.area = area }\n}\n\nclass Animal {\n    var legs: Int\n    init(legs: Int) { self.legs = legs }\n}\n\nlet objects: [AnyObject] = [\n    Circle(radius: 2.0),\n    Country(area: 243_610),\n    Animal(legs: 4)\n]\n\nfor object in objects {\n    if let objectWithArea = object as? HasArea {\n        print("Area is \\(objectWithArea.area)")\n    } else {\n        print("Something that doesn\'t have an area")\n    }\n}\n// Area is 12.5663708\n// Area is 243610.0\n// Something that doesn\'t have an area\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Swift/Swift-3-Protocols.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-swift-swift-3-protocols-md-f60f1513291435dced14.js.map