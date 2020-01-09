# cypress

You can run it using npx cypress open or run

I would maybe use a yaml file for test data (names/giant blocks of text)

With more time I would have focused on the experience for a user that already has an account vs someone who doesn't

You can use some visual verificaiton(Applitools) for the navbar and even the sections on the homepage

With the homepage spec I ran into some issues with verifying the href for /pricing and trying to get the dropdowns to mouseover for some reason didn't work as I had hoped, but probably not too hard to figure out maybe...

Would also add some mobile tests, but there is an issue right now where mobile and desktop share attribute names, and Cypress is picking up both. 
