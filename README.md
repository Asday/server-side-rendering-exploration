# Server Side Rendering Exploration

Nothing like a bit of experimentation.

Current progress and a slightly better idea of what's going on is hanging out in the [goals](goals.md).

# Developing

```shell
nvm install 10
npm i
pip install -r requirements-dev.txt
npm run build
./watch
# In a separate shell
./manage.py runserver
```

Then browse to [localhost:8000](http://localhost:8000).

As this matches no routes, the request will be farmed out to a node process, then returned via Django.

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
