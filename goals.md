# Goals

So what am I attempting here?

* [ ] Django server;
  * [x] Django installed and running;
  * [ ] Django forwards non-matching requests to a node renderer;
    * [x] Django catches non-matching requests in a single view;
    * [ ] Requests are sent elsewhere to render;
    * [ ] 404s are handled properly;
* [ ] React SPA;
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
  * [ ] Storybooks;
    * [x] Storybook installed and working;
    * [ ] Containers work in Storybooks (with a decorator);
      * [x] Containers are given a store to play with in storybooks;
      * [ ] Actions captured in storybooks;
    * [ ] `<Link />`s work in storybooks;
* [ ] React app renders on the server;
  * [ ] Render hook;
  * [ ] Express(?) might not be needed if we target `node` in webpack;
  * [ ] Something to do with webpack to make it real javascript;
* [x] All useful commands runnable from the root directory;
  * [x] `./manage.py ...`
  * [x] `npm start`
* [ ] Oh h*ck what if we only need one terminal window to run everything?

# Unknowns

* How do I render React stuff on the server?
* Can I use just `./manage.py runserver` and visit [localhost:8000](http://localhost:8000) to get to the _current_ React app?  Or will I still need to run `npm start` and go to [localhost:3000](http://localhost:3000)?
* How will this work in "production"?
