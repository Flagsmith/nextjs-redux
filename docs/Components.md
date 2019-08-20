### Prod build
* Build once for (ready for ***Production***):
  * `$ npm run prod` doing this will use project_dev | project_prod in place of your project.js file, minify / cachebust
  * Open `build/index.html` through the local webserver, the build folder can be deployed anywhere

## Routing (web and mobile)
```routes.js``` contain all page routes
```main.js``` contain all page routes
```route-helper.js``` contains all routing functions

Using ```API.js``` you can route push notifications and branch links to the router (see ExamplesPage.js)

## How flux works
1. ```MemeComponent``` emits an action defined in ```app-actions``` (e.g. ```AppActions.sendMeme(url);``` after clicking a button)
2. ```app-actions.js``` takes the params along with an action type defined in action-constants (e.g. ```ActionConstants.SEND_MEME```)
3. ```meme-store.js``` picks up the action and calls events such as
    - store.loading()
    - store.change()
    - store.loaded()
    - store.saving()
    - store.saved()
4. Components listen to events and update state : ```this.listenTo(MemeStore, 'change', ()=>{this.setState({meme: MemeStore.model}})```



# WEB APIS

## Modals
Globally accessible by default
* ```openModal(body, header, footer)```
* ```openConfirm(body, header, onYes, onNo)```

## Share (requires)
``import Share from 'apis/share/share'``
* ``Share.facebook(url)``
* ``Share.twitter(url)``


# Mobile APIS (api.js)
## Modals / Lightboxes

Modals and lightboxes are handled in react-native-navigation, they are simply screens involked using a different navigator function.

```
   
   //usual screen
   
    goAbout: (navigator) => {
        routeHelper.loginWall(navigator, {
            screen: "/about",
            title: "About",
            backButtonTitle: "",
            passProps: {}
        });
    },

	//modal
    openWebModal: (navigator, uri, title) => {
        navigator.showModal({
            screen: "/about",
            title: "About",
            navigatorButtons: _.cloneDeep(global.modalNavButtons),
            passProps: {}
        });
    }
    
	//lightbox
    openWebModal: (navigator, uri, title) => {
        navigator.showLightbox({
            screen: "/about",
            passProps: {}
        });
    }
    
```

For individual Mobile API examples such as file upload, push manager, branch manager see ```ExamplePage.js```


## Grid
```<Flex>{content}</Flex>``` -- creates a div with flex:1
```<FormGroup>{content}</FormGroup>``` -- wraps content with margin bottom of ```$form-group-margin-bottom```
```<Row space={true}><div>item1</div><div>item2</div></Row>``` - creates flex row with the option to space items to extreme ends of the row
```<Column>Text</Column>``` - creates a column with horizontal margin
```<H1>/<H2>/<H3> etc``` - mobile equivalents of headers 



### If you're getting issues with conflicting code styles (e.g. tab indentation)
This standardises code styles and prevents any nasty merge issues caused by differing editor configs

<img src='readme.png'/>

