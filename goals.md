# Goals

So what am I attempting here?

* [ ] Django server;
  * [x] Django installed and running;
  * [ ] Django forwards non-matching requests to a node renderer;
    * [x] Django catches non-matching requests in a single view;
    * [x] Requests are sent elsewhere to render;
    * [ ] 404s are handled properly, (returning an actual 404 status code);
      * [ ] `<Route />`s which are always NotFound return 404;
      * [ ] `<Route />`s which are sometimes NotFound return 404 sometimes;
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
    * [ ] Asynchronous requests within react are waited on before rendering;
  * [x] Express(?) might not be needed if we target `node` in webpack;
    * [x] Haha hell yeah it doesn't require it get memed on Express;
  * [x] Something to do with webpack to make it real javascript;
    * [x] Webpack configuration and requirements to compile to node js;
    * [x] Any unknown stuff I've yet to come across;
* [x] All useful commands runnable from the root directory;
  * [x] `./manage.py ...`
  * [x] `npm start`
* [ ] Improve webpack configuration;
  * [ ] Automatic recompilation and reload on code change;
  * [ ] Linting;
* [ ] Oh h*ck what if we only need one terminal window to run everything?
  * [ ] Something that can run many things in parallel nicely like docker-compose does;
    * [ ] Output from each task must be easily readable;
    * [ ] Hotkeys to kick off tasks (like recompilation after installing a package);
    * [ ] Highest possible signal-to-noise ratio;
  * [ ] Everything:
    * [ ] Storybook;
    * [ ] Webpack automatic re-doeverything-er;
    * [ ] Django server;
    * [ ] flake8;
    * [ ] detox;
    * [ ] `npm run test`;
  * [ ] Standalone binary that reads config files to set up;
  * [ ] This is looking huge maybe it's its own project...

# Knowns

React stuff will be rendered on the server by the Django server shelling out to Node, running a render script, and injecting the returned JSON into a template in the appropriate places.

This means there will be no need to run the react dev server - simply going to localhost:8000 will forward requests to the server-side rendering javascript.

THAT means we initially lose some nice features.  Hot reload is gone, (if it was there in the first place), automatic reloading is gone, automatic recompilation is gone, linting is gone...

None of that matters in production though.
