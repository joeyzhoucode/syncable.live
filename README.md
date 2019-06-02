# syncable.live

This is the source code for [syncable.live](http://syncable.live/welcome).

## Getting started

``` shell
cd syncable.live
bundle
cd client
npm install
cd ..
rake db:migrate
rake db:seed
rake start
```

Once you're ready to deploy to [Heroku](https://www.heroku.com), run:

``` shell
heroku apps:create
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
git push heroku master
heroku run rake db:seed
heroku open
```
