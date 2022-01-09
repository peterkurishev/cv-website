// eslint-disable-next-line func-style
export function onRequest(event) {
  // eslint-disable-next-line no-console, no-restricted-globals
  console.log(event.requestMeta.url.pathname)

  if (event.requestMeta.url.pathname === '/secret') {
    event.replaceResponse(
      // eslint-disable-next-line no-undef
      new Response('<h1>Access denied</h1>', {
        headers: { 'content-type': 'text/html' },
        status: 404,
      }),
    )
  }
}
