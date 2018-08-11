# Goals

So what am I attempting here?

* [ ] Django server;
  * [x] Django installed and running;
  * [ ] Django forwards non-matching requests to a node renderer;
    * [x] Django catches non-matching requests in a single view;
    * [ ] Requests are sent elsewhere to render;
    * [ ] 404s are handled properly;
* [x] React SPA;
  * [x] React app installed and running;
  * [x] Redux and friends installed and running;
    * [x] Redux;
    * [x] react-redux;
    * [x] reselect;
    * [x] lodash (kinda related?);
    * [x] thunk;
    * [x] dev tools and the like working;
    * [x] react-router or whatever it was called;
  * [x] Helmet up and running;
  * [x] Storybooks;
    * [x] Storybook installed and working;
    * [x] Containers work in Storybooks (with a decorator);
      * [x] Containers are given a store to play with in storybooks;
      * [x] Actions captured in storybooks;
    * [x] `<Link />`s work in storybooks;
* [ ] React app renders on the server;
  * [ ] Render hook;
    * [x] Returns head, html, and state post render;
    * [x] Can be given an arbitrary URL to render;
    * [ ] Processes redirects(?);
  * [x] Express(?) might not be needed if we target `node` in webpack;
    * [x] Haha hell yeah it doesn't require it get memed on Express;
  * [ ] Something to do with webpack to make it real javascript;
    * [x] Webpack configuration and requirements to compile to node js;
    * [ ] Any unknown stuff I've yet to come across;
* [x] All useful commands runnable from the root directory;
  * [x] `./manage.py ...`
  * [x] `npm start`
* [ ] Oh h*ck what if we only need one terminal window to run everything?

# Knowns

React stuff will be rendered on the server by the Django server shelling out to Node, running a render script, and injecting the returned JSON into a template in the appropriate places.

This means there will be no need to run the react dev server - simply going to localhost:8000 will forward requests to the server-side rendering javascript.

THAT means we initially lose some nice features.  Hot reload is gone, (if it was there in the first place), automatic reloading is gone, automatic recompilation is gone, linting is gone...

None of that matters in production though.
