(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{Ds5f:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),r=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/iOS/iOS-Gaming-Intro.md"}});var s={_frontmatter:i},l=r.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(o.b)(l,a({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"ios-gaming-intro"},"iOS Gaming Intro"),Object(o.b)("h2",{id:"iosgame-1-ziggity-gag-using-spritekit"},"IOSGAME-1: Ziggity Gag using SpriteKit"),Object(o.b)("h2",{id:"iosgame-11-creating-the-scene"},"IOSGAME-1.1: Creating the Scene"),Object(o.b)("p",null,"As a new Xcode Project, let's select Game, name, next and create!"),Object(o.b)("p",null,"When beginning, you will find a ",Object(o.b)("inlineCode",{parentName:"p"},"GameViewController.swift")," file. Starting from scratch, remove everything such that it looks like the following:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-swift"}),"import UIKit\nimport SpriteKit\nimport GameplayKit\n\nclass GameViewController: UIViewController {\n\n\n}\n")),Object(o.b)("p",null,"Then, we begin by creating the scene:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-swift"}),"import UIKit\nimport QuartzCore\nimport SceneKit\n\nclass GameViewController: UIViewController {\n\n  let scene = SCNScene()\n  // where the camera is kept essentially\n  let cameraNode = SCNNode()\n\n  let firstBox = SCNNode()\n\n  override func viewDidLoad() {\n    self.createScene()\n  }\n\n  func createScene() {\n    // adding objects onto this view that's on the storyboard\n    let sceneView = self.view as! SCNView\n\n    sceneView.scene = scene\n\n    // Create Camera\n    cameraNode.camera = SCNCamera()\n    cameraNode.camera?.usesOrthographicProjection = true\n    cameraNode.camera?.orthographicScale = 3\n    cameraNode.position = SCNVector3Make(20, 20, 20)\n    cameraNode.eulerAngles = SCNVector3Make(-45, 45, 0)\n    let constraint = SCNLookAtConstraint(target: firstBox)\n    constraint.isGimbalLockEnabled = true\n    self.cameraNode.constraints = [constraint]\n    scene.rootNode.addChildNode(cameraNode)\n\n    // Create Box\n    // This will be the first box that is created\n    // and every box create later will be due to this box\n    // chamferRadius is for the edge pointiness\n    let firstBoxGeo = SCNBox(width: 1, height: 1.5, length: 1, chamferRadius: 0)\n    firstBox.geometry = firstBoxGeo\n    firstBox.position = SCNVector3Make(0, 0, 0)\n    scene.rootNode.addChildNode(firstBox)\n\n    // createLight\n    // this will be used so that we can see our box\n\n    let light = SCNNode()\n    light.light = SCNLight()\n    light.light?.type = SCNLight.LightType.directional\n    light.eulerAngles = SCNVector3Make(-45, 45, 0)\n    scene.rootNode.addChildNode(light)\n  }\n\n}\n")),Object(o.b)("p",null,"To explore how the camera works, feel free to head to ",Object(o.b)("inlineCode",{parentName:"p"},"art.scnassets > ship.scn")," and throw in a camera to see how it works."),Object(o.b)("p",null,"From this, you can head to position after adding a camera and chang the ",Object(o.b)("inlineCode",{parentName:"p"},"Position")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Euler")," to see the changes that this makes. ",Object(o.b)("inlineCode",{parentName:"p"},"Euler")," essentially rotates it clockwise around the axis."),Object(o.b)("p",null,"After changing this, you can select ",Object(o.b)("inlineCode",{parentName:"p"},"camera")," from the bottom just to see how it looks."),Object(o.b)("h2",{id:"iosgame-12-adding-colors-and-a-person"},"IOSGAME-1.2: Adding Colors and a Person"),Object(o.b)("p",null,"Create a global node: ",Object(o.b)("inlineCode",{parentName:"p"},"var person = SCNNode()")),Object(o.b)("p",null,"Then, in ",Object(o.b)("inlineCode",{parentName:"p"},"createScene()")," we can add"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-swift"}),"// Create Person\n\nlet personGeo = SCNSphere(radius: 0.2)\nperson = SCNNode(geometry: personGeo)\nlet personMat = SCNMaterial()\npersonMat.diffuse.contents = UIColor.red\npersonGeo.materials = [personMat]\nperson.position = SCNVector3Make(0, 1.1, 0)\nscene.rootNode.addChildNode(person)\n")),Object(o.b)("p",null,"For the actions, we can override the ",Object(o.b)("inlineCode",{parentName:"p"},"touchesBegan()")," function and apply some logic. Ensure that you create the appropriate global Booleans."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-swift"}),"override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {\n    if goingLeft == false {\n      person.removeAllActions()\n      person.runAction(SCNAction.repeatForever(SCNAction.move(by: SCNVector3Make(-100, 0, 0), duration: 20)))\n      goingLeft = true\n    } else {\n      person.removeAllActions()\n      person.runAction(SCNAction.repeatForever(SCNAction.move(by: SCNVector3Make(0, 0, -100), duration: 20)))\n      goingLeft = false\n    }\n  }\n")),Object(o.b)("p",null,'After adjusting the constaint of what we want the camera to look at etc. we can now start using the camera to look our "person". The code up to the end of this section looks as follows:'),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-swift"}),"import UIKit\nimport QuartzCore\nimport SceneKit\n\nclass GameViewController: UIViewController {\n\n  let scene = SCNScene()\n  // where the camera is kept essentially\n  let cameraNode = SCNNode()\n\n  let firstBox = SCNNode()\n\n  var person = SCNNode()\n\n  var goingLeft = Bool()\n\n  override func viewDidLoad() {\n    self.createScene()\n  }\n\n  override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {\n    if goingLeft == false {\n      person.removeAllActions()\n      person.runAction(SCNAction.repeatForever(SCNAction.move(by: SCNVector3Make(-100, 0, 0), duration: 20)))\n      goingLeft = true\n    } else {\n      person.removeAllActions()\n      person.runAction(SCNAction.repeatForever(SCNAction.move(by: SCNVector3Make(0, 0, -100), duration: 20)))\n      goingLeft = false\n    }\n  }\n\n  func createScene() {\n\n    self.view.backgroundColor = UIColor.white\n\n    // adding objects onto this view that's on the storyboard\n    let sceneView = self.view as! SCNView\n\n    sceneView.scene = scene\n\n    // Create Person\n\n    let personGeo = SCNSphere(radius: 0.2)\n    person = SCNNode(geometry: personGeo)\n    let personMat = SCNMaterial()\n    personMat.diffuse.contents = UIColor.red\n    personGeo.materials = [personMat]\n    person.position = SCNVector3Make(0, 1.1, 0)\n    scene.rootNode.addChildNode(person)\n\n    // Create Camera\n    cameraNode.camera = SCNCamera()\n    cameraNode.camera?.usesOrthographicProjection = true\n    cameraNode.camera?.orthographicScale = 3\n    cameraNode.position = SCNVector3Make(20, 20, 20)\n    cameraNode.eulerAngles = SCNVector3Make(-45, 45, 0)\n    let constraint = SCNLookAtConstraint(target: person)\n    constraint.isGimbalLockEnabled = true\n    self.cameraNode.constraints = [constraint]\n    scene.rootNode.addChildNode(cameraNode)\n    person.addChildNode(cameraNode)\n\n    // Create Box\n    // This will be the first box that is created\n    // and every box create later will be due to this box\n    // chamferRadius is for the edge pointiness\n    let firstBoxGeo = SCNBox(width: 1, height: 1.5, length: 1, chamferRadius: 0)\n    firstBox.geometry = firstBoxGeo\n    let boxMaterial = SCNMaterial()\n    boxMaterial.diffuse.contents = UIColor(red: 0.2, green: 0.8, blue: 0.9, alpha: 1.0)\n    firstBoxGeo.materials = [boxMaterial]\n    firstBox.position = SCNVector3Make(0, 0, 0)\n    scene.rootNode.addChildNode(firstBox)\n\n    // Create Light\n    // this will be used so that we can see our box\n\n    let light = SCNNode()\n    light.light = SCNLight()\n    light.light?.type = SCNLight.LightType.directional\n    light.eulerAngles = SCNVector3Make(-45, 45, 0)\n    scene.rootNode.addChildNode(light)\n\n    let light2 = SCNNode()\n    light2.light = SCNLight()\n    light2.light?.type = SCNLight.LightType.directional\n    light2.eulerAngles = SCNVector3Make(45, 45, 0)\n    scene.rootNode.addChildNode(light2)\n  }\n}\n")),Object(o.b)("h2",{id:"iosgame-13-creating-a-path"},"IOSGAME-1.3: Creating a Path"),Object(o.b)("p",null,"Creating the function createBox(), we can use a new SCNNode dynamically generated along with a switch on ",Object(o.b)("inlineCode",{parentName:"p"},"arc4random")," in order to create new boxes."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),'func createBox() {\n    tempBox = SCNNode(geometry: firstBox.geometry)\n    let prevBox = scene.rootNode.childNode(withName: "\\(boxNumber)", recursively: true)\n\n    boxNumber += 1\n    tempBox.name = "\\(boxNumber)"\n\n    let randomNumber = arc4random() % 2\n\n    switch randomNumber {\n      case 0:\n        tempBox.position = SCNVector3Make((prevBox?.position.x)! - firstBox.scale.x, (prevBox?.position.y)!, (prevBox?.position.z)!)\n        break\n      case 1:\n        tempBox.position = SCNVector3Make((prevBox?.position.x)!, (prevBox?.position.y)!, (prevBox?.position.z)! - firstBox.scale.z)\n        break\n      default:\n        break\n    }\n\n    self.scene.rootNode.addChildNode(tempBox)\n  }\n')),Object(o.b)("p",null,"By the end of this stage, you will end up having a path to follow that has 6 boxes ahead for you to see, but it will not decide whether or not you are on the box."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-swift"}),'import UIKit\nimport QuartzCore\nimport SceneKit\n\nclass GameViewController: UIViewController, SCNSceneRendererDelegate {\n\n  let scene = SCNScene()\n  // where the camera is kept essentially\n  let cameraNode = SCNNode()\n\n  let firstBox = SCNNode()\n\n  var person = SCNNode()\n\n  var goingLeft = Bool()\n\n  var tempBox = SCNNode()\n\n  var prevBoxNumber = Int()\n  var boxNumber = Int()\n\n  override func viewDidLoad() {\n    self.createScene()\n  }\n\n  // used to ensure ball is on the path\n  func renderer(_ renderer: SCNSceneRenderer, updateAtTime time: TimeInterval) {\n    let deleteBox = self.scene.rootNode.childNode(withName: "\\(prevBoxNumber)", recursively: true)\n\n    if (deleteBox?.position.x)! > person.position.x + 1 || (deleteBox?.position.z)! > person.position.z + 1 {\n      prevBoxNumber+=1\n\n      deleteBox?.removeFromParentNode()\n\n      createBox()\n    }\n  }\n\n  func createBox() {\n    tempBox = SCNNode(geometry: firstBox.geometry)\n    let prevBox = scene.rootNode.childNode(withName: "\\(boxNumber)", recursively: true)\n\n    boxNumber += 1\n    tempBox.name = "\\(boxNumber)"\n\n    let randomNumber = arc4random() % 2\n\n    switch randomNumber {\n      case 0:\n        tempBox.position = SCNVector3Make((prevBox?.position.x)! - firstBox.scale.x, (prevBox?.position.y)!, (prevBox?.position.z)!)\n        break\n      case 1:\n        tempBox.position = SCNVector3Make((prevBox?.position.x)!, (prevBox?.position.y)!, (prevBox?.position.z)! - firstBox.scale.z)\n        break\n      default:\n        break\n    }\n\n    self.scene.rootNode.addChildNode(tempBox)\n  }\n\n  override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {\n    if goingLeft == false {\n      person.removeAllActions()\n      person.runAction(SCNAction.repeatForever(SCNAction.move(by: SCNVector3Make(-100, 0, 0), duration: 20)))\n      goingLeft = true\n    } else {\n      person.removeAllActions()\n      person.runAction(SCNAction.repeatForever(SCNAction.move(by: SCNVector3Make(0, 0, -100), duration: 20)))\n      goingLeft = false\n    }\n  }\n\n  func createScene() {\n\n    prevBoxNumber = 0\n    boxNumber = 0\n\n    self.view.backgroundColor = UIColor.white\n\n    // adding objects onto this view that\'s on the storyboard\n    let sceneView = self.view as! SCNView\n    sceneView.delegate = self\n    sceneView.scene = scene\n\n    // Create Person\n    let personGeo = SCNSphere(radius: 0.2)\n    person = SCNNode(geometry: personGeo)\n    let personMat = SCNMaterial()\n    personMat.diffuse.contents = UIColor.red\n    personGeo.materials = [personMat]\n    person.position = SCNVector3Make(0, 1.1, 0)\n    scene.rootNode.addChildNode(person)\n\n    // Create Camera\n    cameraNode.camera = SCNCamera()\n    cameraNode.camera?.usesOrthographicProjection = true\n    cameraNode.camera?.orthographicScale = 3\n    cameraNode.position = SCNVector3Make(20, 20, 20)\n    cameraNode.eulerAngles = SCNVector3Make(-45, 45, 0)\n    let constraint = SCNLookAtConstraint(target: person)\n    constraint.isGimbalLockEnabled = true\n    self.cameraNode.constraints = [constraint]\n    scene.rootNode.addChildNode(cameraNode)\n    person.addChildNode(cameraNode)\n\n    // Create Box\n    // This will be the first box that is created\n    // and every box create later will be due to this box\n    // chamferRadius is for the edge pointiness\n    let firstBoxGeo = SCNBox(width: 1, height: 1.5, length: 1, chamferRadius: 0)\n    firstBox.geometry = firstBoxGeo\n    let boxMaterial = SCNMaterial()\n    boxMaterial.diffuse.contents = UIColor(red: 0.2, green: 0.8, blue: 0.9, alpha: 1.0)\n    firstBoxGeo.materials = [boxMaterial]\n    firstBox.position = SCNVector3Make(0, 0, 0)\n    scene.rootNode.addChildNode(firstBox)\n    firstBox.name = "\\(boxNumber)"\n\n    for i in 0...6 {\n      createBox()\n    }\n\n    // Create Light\n    // this will be used so that we can see our box\n\n    let light = SCNNode()\n    light.light = SCNLight()\n    light.light?.type = SCNLight.LightType.directional\n    light.eulerAngles = SCNVector3Make(-45, 45, 0)\n    scene.rootNode.addChildNode(light)\n\n    let light2 = SCNNode()\n    light2.light = SCNLight()\n    light2.light?.type = SCNLight.LightType.directional\n    light2.eulerAngles = SCNVector3Make(45, 45, 0)\n    scene.rootNode.addChildNode(light2)\n  }\n}\n')),Object(o.b)("h2",{id:"iosgame-14-keeping-a-person-on-the-path"},"IOSGAME-1.4: Keeping a person on the path"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/iOS/iOS-Gaming-Intro.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-i-os-i-os-gaming-intro-md-c64d173ff174e3689a83.js.map