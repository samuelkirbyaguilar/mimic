<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    @if (env("APP_ENV") == "local")
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
        <script src="{{ mix('/js/app.js') }}" defer></script>
    @elseif (env("APP_ENV") == "production")
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
        <script src="{{ asset('js/app.js') }}" defer></script>
    @endif
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
