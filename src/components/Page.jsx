import { aggregate, aggregateHash, style } from '../services/CssAggregationService.mjs';

export default async function Page({ children }) {
  style(`
    global html, global body {
      display: block;
      padding: 0px;
      margin: 0px;
      background-color: #333;
      color: #DDD;
      height: 100%;
      font: 1em "Helvetica Neue", Helvetica, sans-serif;
    }

    global section {
      position: relative;
      height: 100%;
    }
  `);

  const content = await children;

  return (
    <>
      {'<!DOCTYPE html>\n'}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="BealeARTS - Information Ingenuity" />
          <meta httpEquiv="Content-Security-Policy" content={`script-src 'self'; style-src '${aggregateHash()}'`} />
          <title>BealeARTS</title>
          <link rel="manifest" href="manifest.json" />
          <style>{aggregate()}</style>
        </head>
        <body>
          { content }
        </body>
      </html>
    </>
  );
}
