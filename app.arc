@app
lnug-signup

@http
get /
post /

@plugins
arc-plugin-tailwindcss

@tables
lnug
  eventId *String
  email **String
  expires TTL

@aws
profile lnug
region eu-west-1
architecture arm64


@tailwindcss
content src/**/*.mjs