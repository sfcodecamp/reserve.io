[Resolving Merge Conflicts]: https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/
[Reserve.io]: https://github.com/sfcodecamp/reserve.io.git
[Open Table]:https://github.com/realworldreact/reactathon2017/blob/master/apis.md

# reserve.io
An easy way for groups to book reservations through Open Table. 

##What we're working with
1. React
2. Redux
3. Open Table API

##Getting Started
####Before Getting Started, install Node on your machine
1. Fork the [Reserve.io][] repo to your Github account
2. Clone the repo from your Github account to your machine. 
3. CD into your Reserve.io directory and run the following commands:
  - npm install (installs all of the dependencies needed)
  - git remote add upstream https://github.com/sfcodecamp/reserve.io.git (set a remote to the main repo so later you can pull down updates from other team members)
  - npm run start
4. Follow these steps to get your [Open Table API][] token.

##Roadmap
v1.0 Build a web based app with React/Redux to query Open Table API for restaurant and reservation data, render UI cards of restaurant data in a grid layout, generate unique URLs for each group, implement Open Table reservation integration, functionality to upvote on options, and add awesome interactive animations.

###Updating Your Project
1. Commit your changes or remove them from staging
2. Check your remotes by running git remote -v. You should see your origins and the upstreams.

```javascript
origin	https://github.com/vientang/reserve.io.git (fetch)
origin	https://github.com/vientang/reserve.io.git (push)
upstream	https://github.com/sfcodecamp/reserve.io.git (fetch)
upstream	https://github.com/sfcodecamp/reserve.io.git (push)
```

3. Run git pull --rebase upstream master
4. You now have the latest code! 
5. Do you see merge conflicts? This [Resolving Merge Conflicts][] article is pretty good for explaining what to do.
