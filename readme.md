# clean-env

clean-env is essentially a pared down [dotenv](https://github.com/motdotla/dotenv) that purges all the environment variables your process doesn’t need.

## install

```sh
npm install michaelrhodes/clean-env#1.0.1
```

## use

```sh
# Create an app and an .env file
echo 'console.log(process.env)' > app.js
echo 'FOO=bar' > .env

node -r clean-env app.js
#> { FOO: 'bar' }

BAZ=Lurhmann node -r clean-env app.js
#> { FOO: 'bar' }

# Hang onto specific variables
echo 'CLEAN_ENV_KEEP=BAZ:BOZ:FOZ' >> .env

BAZ=Luhrmann node -r clean-env app.js
#> { BAZ: 'Lurhmann', FOO: 'bar' }

BAZ=Luhrmann FOZ=true node -r clean-env app.js
#> { BAZ: 'Lurhmann', FOZ: 'true', FOO: 'bar' }
```

## obey

[MIT](http://opensource.org/licenses/MIT)
