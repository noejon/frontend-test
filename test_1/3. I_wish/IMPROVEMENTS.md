# Improvements

The submission was also missing the point on some delivered parts:
1. The overlay got applied to the containing div and not the image. So this has not be handled properly.
2. I was unable to find a solution to read the json files. I tried a few solutions:
- using fetch - not working
- using XMLHttpRequest - gave me CORS issues
My non framework (react or angular) js is becoming a bit rusty and I could really not figure out how to load the json file without using a local server ( I was running out of time at this point)
What were the easy solutions:
- Install a simple local server and use the javascript `fetch` function to retrieve the data in the json files
3. This is not a mistake I made, but I probably should not have followed the order provided. I should have started with the javascript part, to finish with the css. The reason for that is that it looks like the javascript part was going to be longer to implement than the css part.