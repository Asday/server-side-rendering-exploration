# Server Side Rendering Exploration

Nothing like a bit of experimentation.

Current progress and a slightly better idea of what's going on is hanging out in the [goals](goals.md).

# Developing

```shell
nvm install 10
npm i
pip install -r requirements-dev.txt
npm run build:render
./watch
# In a separate shell
./manage.py runserver
```

Then browse to [localhost:8000](http://localhost:8000).

Currently this renders nothing useful and is super boring, but will soon isomorphically(?) render the react app and deliver it.

To view the react app, for now, do the following:

```shell
npm run
```

Then browse to [localhost:3000](http://localhost:3000), if your browser isn't opened for you automatically.

# Running tests

```shell
detox
npm run test
```

# Running Storybook

```shell
npm run storybook
```

Then browse to [localhost:9001](http://localhost:9001).
