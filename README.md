# Catholic Patrons Central Server

# Vincent's Notes
I think first course of action would be migrating away from the Squarespace
template to a proper website. I've gone ahead and created a website for
Catholic Patrons using Svelte trying to make it similiar to the Squarespace
template. I used Svelte + TypeScript to make this. Jay would prefer
using React + TSX. I know the very basics of React, but I don't know it well
enough to setup the project myself using React. The other people involved
in this project also don't know React so they'd have to learn it. IMO
Svelte is a easier to learn and use. But whether to continue with this
Svelte codebase or rewrite in React is something that needs to be determined.

As for databases. I have experience with MongoDB, but it was an absolute
pain to get setup properly. Once setup it's pretty easy to use. I wouldn't
mind using it at all as long as I don't have to go through setting it up.
Although, I'm guessing others involved here might be more familiar with 
SQL. But IIRC Jay seemed in favor of a no-SQL database.

But we need to get a group chat together so that we can plan things out
better. We just have a fairly vague and high level view that we are creating
a crowd funding platform for catholic organizations. We need to plan details
so that they can be implemented.

In addition to an "about" and "contact" page we need
1) An organization portal
2) A donor portal
3) An admin portal

We need to figure out what features each should include. E.g. for donors
portals to be able to search for causes in a certain location. What would
this involve? Possible having to use Google maps API's. 

Another consideration
is the cost of such APIs. Another consideration is that we need some sort
of authorization for accounts. I've rolled out my own auth code before and I 
wouldn't recommend it. What alternative options do we have? Consider the
ability to sign up with a Google account using OAuth.

Another thing is handling payments. Theoretically we will accomplish this
using Stripe. Research needs to be done into how Stripe works and how
to ensure we use it securely.

Jay mentioned that he would like to organize this using a microservices
architecture. I'm not exactly sure what that entails. The main website
server needs to be its own monolith. But I'm imagining the database (or
databases) would run seperately and there would be seperate servers
for interacting with those databases. If these other servers are going
to be "running on the edge in the cloud" I think it would be wise to
consider not using TypeScript for the backend due to startup times.

Even without taking coldstart times into consideration maybe it would 
be better to use Dart for the backend instead of TypeScript? It is more
similar to Java which is what most the people involved in this project
are familiar with. And it compiles to native code meaning it does not
need to be parsed and compiled each time a new request comes in.

What other tasks do we need to complete?
1) Somehow verify organizations to prevent donors from getting scammed
2) Probably more stuff???

I hate CSS  
I hate CSS  
I hate CSS  
<img src="https://i.imgflip.com/5oqr88.png" width="300">

## Dev
**SvelteKit Tutorial:**
[https://svelte.dev/docs/kit/introduction](https://svelte.dev/docs/kit/introduction)   
**Svelte Tutorial:**
[https://svelte.dev/tutorial/svelte/welcome-to-svelte](https://svelte.dev/tutorial/svelte/welcome-to-svelte)

git clone, install dependencies using:
```bash
npm install
```
then run the following the start the server
```bash
npm run dev
```

## Building
To build and run production version:
```bash
npm run build
npm run preview
```
