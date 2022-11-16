const arc = require("@architect/functions");

exports.handler = async () => ({
  statusCode: 200,
  headers: {
    "content-type": "text/html; charset=utf8",
  },
  body: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="${arc.static("./style.css")}" rel="stylesheet">
    </head>
    <body>
    <header class="bg-slate-900">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
        <div class="flex items-center">
          <a href="https://lnug.org/">
            <img class="max-h-20"
              src="https://d33wubrfki0l68.cloudfront.net/45698a52e0b2b49b78801ea9fa67a1eb0d083c79/28f75/img/lnug-logo.svg"
              alt="LNUG logo">
          </a>
          <div class="ml-10 hidden space-x-8 lg:block">
            <a href="https://lnug.org/" class="text-slate-50 text-4xl font-bold underline">
              Meetup #96 : Return of LNUG!
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
    <maim
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <main class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <form class="px-4 py-5 sm:p-6 space-y-4" method="POST">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <div class="mt-1">
          <input type="name" name="name" id="name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Awesome LNUG Human">
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <div class="mt-1">
          <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com">
        </div>
      </div>
      <button type="submit" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign Up</button>
      </form>
      <footer class="px-4 py-4 sm:px-6">
        <p>  
        Note from sponsor Beamery on data use: </br>
        24-48 hours prior to the event you will receive a QR code to your email address that you provide on this form. This QR will give you access to the Beamery, HYLO building where our LNUG event is taking place.
        When you arrive you will just need to scan it at the gates for entry. </br>
        Please note: you will not be allowed through security unless you are listed as "Attending" on this event. </br>
        <strong> Your details will be shared with our event sponsor, Beamery, for communication and health & safety purposes relating to the event. </strong>
         </p> 
         <hr>
        <p>After the event your details will be automatically deleted, the code for this is opensource and can be found here: <a href="https://github.com/lnug/sign-up">https://github.com/lnug/sign-up</a></p>
      </footer>
      </main>
      </div>
      </div
    </body>
    </html>
  `,
});
