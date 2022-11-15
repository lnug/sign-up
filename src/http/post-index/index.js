// single function
let arc = require('@architect/functions')

exports.handler = arc.http(handler)

async function handler(req, res) {
  const tables = await arc.tables();

  let lnugDate = new Date('2022-11-22T21:00:00.000Z')
  await tables.lnug.put({
    eventId: '#96',
    email: req.body.email,
    name: req.body.name,
    expires:  Math.round(lnugDate.getTime() / 1000)
  });

  res({
    html: `
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
          <a href="#">
            <img class="max-h-20"
              src="https://d33wubrfki0l68.cloudfront.net/45698a52e0b2b49b78801ea9fa67a1eb0d083c79/28f75/img/lnug-logo.svg"
              alt="LNUG logo">
          </a>
          <div class="ml-10 hidden space-x-8 lg:block">
            <h1 class="text-slate-50 text-4xl font-bold underline">
              #96 22nd Nov 2022
            </h1>
          </div>
        </div>
      </div>
    </nav>
  </header>
    <maim
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <main class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div class="px-4 py-5 sm:p-6 space-y-4">You are going to LNUG #96</div>
      <footer class="px-4 py-4 sm:px-6">
        <p>LNUG promises to only use this information where necessary to get you into a venue. </p>
        <p>After the event your details will be automatically deleted, the code for this is opensource and can be found here: <a href="https://github.com/lnug">https://github.com/lnug</a></p>
      </footer>
      </main>
      </div>
      </div
    </body>
    </html>
  `,
  })
}
