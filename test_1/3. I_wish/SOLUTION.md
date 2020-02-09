# Image hover

I have tried a few different solutions to what I submitted to be able to match the image and the image only but none of the solutions using pure css worked. 
The problem is that we will always need to use a different div to add an overlay to an image. 
It is possible that the solution involved using javascript here, but I won't try it any further at this point.

# JSON

## Assumptions:
- The player id is unique

## Choices

In order to merge the stats data with the players data we could simply loop through the stats array and foreach element in that array loop again the players array. That would have a complexity of O(n^2). For the amount of elements present in our json files it will be fast enough, but it does not scale in case we have bigger files. So the solution I provided has a complexity of O(n).

I decided to use [http-server](https://github.com/http-party/http-server) as the server to serve the files to `localhost:8080`

## Running the project

In order to run the project you will need to have [node.js](https://nodejs.org/en/) and `npm` installed. By installing `node.js` it should install `npm` by default.

Once `npm` is installed, open a console and browse to the `3. I_wish` directory and run the following command `npm install`.
After that simply run `npm run start`. Then browse to [http://localhost:8080/](http://localhost:8080/).

You should now see the completed test 1.