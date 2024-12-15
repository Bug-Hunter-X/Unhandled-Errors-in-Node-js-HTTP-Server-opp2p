This repository demonstrates a common, yet subtle bug in Node.js: unhandled errors in HTTP servers.

The `server.js` file contains a basic HTTP server.  While functional, it lacks robust error handling.  This can lead to crashes or unexpected behavior when encountering issues like network errors or client disconnections.

The `serverSolution.js` file provides an improved version with better error handling, showcasing how to gracefully handle potential problems and log informative error messages.