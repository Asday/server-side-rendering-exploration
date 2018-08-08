# Goals

So what am I attempting here?

* [ ] Django server;
  * [x] Django installed and running;
  * [ ] Django forwards non-matching requests to a node renderer
* [ ] React SPA;
  * [x] React app installed and running;
  * [ ] Redux and friends installed and running;
  * [ ] React app renders on the server;
* [x] All useful commands runnable from the root directory;
  * [x] `./manage.py ...`
  * [x] `npm start`

# Unknowns

* How do I render React stuff on the server?
* Can I use just `./manage.py runserver` and visit [localhost:8000](http://localhost:8000) to get to the _current_ React app?  Or will I still need to run `npm start` and go to [localhost:3000](http://localhost:3000)?
* How will this work in "production"?
