// 2009- js runs only inside the browser;
//ryan dahl-build node.js to run js outside thebrowser (on serverdatabse or on filesystem)

//node.js- its provide runtime environment to the js  so it can run outside thebrowser


//-> How nodejs actually work:
//- node.js made up using three things
//1.v8 engine(google)(js engine made by google written in cpp)
//- v8 covert the js code into machine code and cpu execute that code

//2.libuv(cpp)-the engine that handles async operations + event loop + system-level tasks
// libuv basically it is a lib which do the slow work in the background to prevent the execution or flow of code

//3.node js binding(its work as a translator in btw v8 engine and libuv(v8-js code and libuv(cpp) both are diff lang so how they talk to each other soln is binding))


//note: node.js(v8 engine+libuv)->bind with binding->runs js on serverdatabse
//result->fast,non-blocking.server-side(jsvascript)



