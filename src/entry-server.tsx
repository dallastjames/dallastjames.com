// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" class="h-full bg-black">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/dallas-img.ico" />
          {assets}
        </head>
        <body class="flex bg-[#1E2336]/60">
          <div id="app" class="w-full h-full">
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
