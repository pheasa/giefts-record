**Error in running nuxt project: "'nuxt' is not recognized as an internal or external command"**

This question shows research effort; it is useful and clear

33

This question does not show any research effort; it is unclear or not useful

Save this question.

[](/posts/55997850/timeline)

Show activity on this post.

When I tried to run `npm run dev` in my nuxt project, my console returned this message:

    'nuxt' is not recognized as an internal or external command, 
    operable program or batch file.
    npm ERR! code ELIFECYCLE
    npm ERR! errno 1
    npm ERR! andromeda@1.0.0 dev: `nuxt`
    npm ERR! Exit status 1
    npm ERR!
    npm ERR! Failed at the andromeda@1.0.0 dev script.
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
    

*   [vue.js](/questions/tagged/vue.js "show questions tagged 'vue.js'")
*   [nuxt.js](/questions/tagged/nuxt.js "show questions tagged 'nuxt.js'")

[Share](/q/55997850 "Short permalink to this question")

Share a link to this question

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this question](/posts/55997850/edit)

Follow

Follow this question to receive notifications

[edited Jul 19, 2019 at 14:25](/posts/55997850/revisions "show all edits to this post")

Marquezz

asked May 6, 2019 at 1:37

[

![Marquezz's user avatar](https://www.gravatar.com/avatar/a44e7b4cc84a1decf162160c53e6f9c7?s=64&d=identicon&r=PG&f=y&so-version=2)

](/users/11457121/marquezz)

[Marquezz](/users/11457121/marquezz)Marquezz

1,29311 gold badge77 silver badges1010 bronze badges

4

*   3
    
    What version of node, npm and nuxt do you have?
    
    – [Andrew1325](/users/10526685/andrew1325 "3,539 reputation")
    
    [May 6, 2019 at 1:54](#comment98642745_55997850)
    
*   9
    
    Have you run `npm install`?
    
    – [Phil](/users/283366/phil "160,858 reputation")
    
    [May 6, 2019 at 2:36](#comment98643127_55997850)
    
*   I tried run npm install alrady. nuxt@2.6.1 node v10.15.3 npm 6.4.1
    
    – [Marquezz](/users/11457121/marquezz "1,293 reputation")
    
    [May 7, 2019 at 2:39](#comment98673794_55997850)
    
*   Possible duplicate of [npm ERR! code ELIFECYCLE](https://stackoverflow.com/questions/42308879/npm-err-code-elifecycle)
    
    – [Gino Mempin](/users/2745495/gino-mempin "26,801 reputation")
    
    [Aug 7, 2019 at 23:47](#comment101288484_55997850)
    

[Add a comment](# "Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.")  | [](# "Expand to show all comments on this post")

9 Answers 9
-----------

Sorted by: [Reset to default](/questions/55997850/error-in-running-nuxt-project-nuxt-is-not-recognized-as-an-internal-or-exter?answertab=scoredesc#tab-top)

Highest score (default) Trending (recent votes count more) Date modified (newest first) Date created (oldest first)

This answer is useful

86

This answer is not useful

Save this answer.

[](/posts/56069667/timeline)

Show activity on this post.

I solved this problem.  
I was looking in stackoverflow for similar problems and apparently the problem was the npm cache.  
I will let a link bellow with the solution and a quick sample of what i did.

Link to the answer: [npm ERR! code ELIFECYCLE](https://stackoverflow.com/questions/42308879/npm-err-code-elifecycle)

> Step 1: `npm cache clean --force`
> 
> Step 2: Delete node\_modules by $ `rm -rf node_modules` folder or delete it manually by going into the directory and right-click > delete. Delete `package-lock.json` file too.
> 
> Step 3: `npm install`
> 
> To start again, `npm start`

Thanks everyone who take time to help, really appreciate.

[Share](/a/56069667 "Short permalink to this answer")

Share a link to this answer

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this answer](/posts/56069667/edit)

Follow

Follow this answer to receive notifications

[edited Aug 9, 2019 at 0:04](/posts/56069667/revisions "show all edits to this post")

[

![Soviut's user avatar](https://www.gravatar.com/avatar/d47d0397605e4b9cab9fd8fce027e3b5?s=64&d=identicon&r=PG)

](/users/46914/soviut)

[Soviut](/users/46914/soviut)

89.6k5050 gold badges197197 silver badges269269 bronze badges

answered May 10, 2019 at 1:45

[

![Marquezz's user avatar](https://www.gravatar.com/avatar/a44e7b4cc84a1decf162160c53e6f9c7?s=64&d=identicon&r=PG&f=y&so-version=2)

](/users/11457121/marquezz)

[Marquezz](/users/11457121/marquezz)Marquezz

1,29311 gold badge77 silver badges1010 bronze badges

1

*   1
    
    This answer also solved the similar problem I had with `nuxt-ts`. Thank you !
    
    – [Guillaume Voiron](/users/2231422/guillaume-voiron "1,795 reputation")
    
    [Dec 23, 2020 at 11:12](#comment115665380_56069667)
    

[Add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | [](# "Expand to show all comments on this post")

This answer is useful

16

This answer is not useful

Save this answer.

[](/posts/55998173/timeline)

Show activity on this post.

Make sure `nuxt` is installed in your Nuxt project:

    $ cd /path/to/nuxt-project
    $ npm list nuxt
    nuxt-project@1.0.0 /path/to/nuxt-project
    └── nuxt@2.6.3 
    

Here _/path/to/nuxt-project_ contains your _package.json_ and _node-modules_.

If it isn't installed, [add `nuxt` to your project](https://nuxtjs.org/guide/installation/#installing-code-nuxt-code-) by doing:

    $ npm install --save nuxt
    

Or put it in your project's _package.json_ then do `npm install`:

      "dependencies": {
        "nuxt": "^2.0.0"
      },
    

* * *

**UPDATE**:  
If you are still getting "nuxt not recognized" problems, try to use explicit path to `nuxt` from your _node\_modules_ directory.

Given this directory (after doing `npm install --save nuxt`):

    nuxt-project
    |- node_modules
       |- .bin
          |- nuxt
    |- package.json
    

Update the `dev` command in _package.json_ with:

    "scripts": {
      "dev": "node_modules/.bin/nuxt"
    },
    

[Share](/a/55998173 "Short permalink to this answer")

Share a link to this answer

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this answer](/posts/55998173/edit)

Follow

Follow this answer to receive notifications

[edited May 8, 2019 at 2:20](/posts/55998173/revisions "show all edits to this post")

answered May 6, 2019 at 2:40

[

![Gino Mempin's user avatar](https://www.gravatar.com/avatar/5bbcd267235bab78ec6710ef6654ba87?s=64&d=identicon&r=PG)

](/users/2745495/gino-mempin)

[Gino Mempin](/users/2745495/gino-mempin)Gino Mempin

26.8k2929 gold badges104104 silver badges144144 bronze badges

5

*   It still has the same error. My dependencies: "dependencies": { "nuxt": "^2.4.0", "cross-env": "^5.2.0", "bootstrap-vue": "^2.0.0-rc.11", "bootstrap": "^4.1.3", "@nuxtjs/axios": "^5.3.6" },
    
    – [Marquezz](/users/11457121/marquezz "1,293 reputation")
    
    [May 7, 2019 at 2:41](#comment98673814_55998173)
    
*   @Marquezz Just to be sure, you are running `npm install` and `npm run dev` under the project directory? What do you get when you do `npm list nuxt`?
    
    – [Gino Mempin](/users/2745495/gino-mempin "26,801 reputation")
    
    [May 7, 2019 at 3:20](#comment98674238_55998173)
    
*   I am sure that i'm on the right directory.and when i run npm list nuxt i get this: \`-- nuxt@2.6.1 I search on google and i found some people having problems with nuxt + windows 10
    
    – [Marquezz](/users/11457121/marquezz "1,293 reputation")
    
    [May 8, 2019 at 2:04](#comment98708230_55998173)
    
*   1
    
    @Marquezz Oh OK. I updated my answer. Try to change the `dev` command to use the explicit node\_modules path for `nuxt`.
    
    – [Gino Mempin](/users/2745495/gino-mempin "26,801 reputation")
    
    [May 8, 2019 at 2:21](#comment98708400_55998173)
    
*   I followed these steps and this error went away for me. But, I had to use `yarn install` after this to link the dependencies properly and do `npm run dev`
    
    – [retr0](/users/6124909/retr0 "654 reputation")
    
    [Jul 22, 2019 at 14:24](#comment100811578_55998173)
    

[Add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | [](# "Expand to show all comments on this post")

This answer is useful

9

This answer is not useful

Save this answer.

[](/posts/58604991/timeline)

Show activity on this post.

Sometimes this blows up because you're not exporting `node_modules/.bin` directory.

Place or append the following line in your `.bashrc` or `.zshrc`:

`export PATH=node_modules/.bin:$PATH`

[Share](/a/58604991 "Short permalink to this answer")

Share a link to this answer

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this answer](/posts/58604991/edit)

Follow

Follow this answer to receive notifications

[edited Sep 4, 2022 at 7:31](/posts/58604991/revisions "show all edits to this post")

answered Oct 29, 2019 at 9:53

[

![Yamen Ashraf's user avatar](https://www.gravatar.com/avatar/4efd90fd7336094ea2b9a7d6fc0e2556?s=64&d=identicon&r=PG)

](/users/7268901/yamen-ashraf)

[Yamen Ashraf](/users/7268901/yamen-ashraf)Yamen Ashraf

2,78522 gold badges2323 silver badges2727 bronze badges

0

[Add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | [](# "Expand to show all comments on this post")

This answer is useful

3

This answer is not useful

Save this answer.

[](/posts/65181068/timeline)

Show activity on this post.

Have the same problem recently.

Solution for me was change the path of scripts section in _package.json_ from this:

      "scripts": {
        "dev": "nuxt",
        "build": "nuxt build",
        "start": "nuxt start",
        "generate": "nuxt generate"
      },
    

to that:

      "scripts": {
        "dev": "node_modules/.bin/nuxt",
        "build": "node_modules/.bin/nuxt build",
        "start": "node_modules/.bin/nuxt start",
         "generate": "node_modules/.bin/nuxt generate"
      },
    

[Share](/a/65181068 "Short permalink to this answer")

Share a link to this answer

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this answer](/posts/65181068/edit)

Follow

Follow this answer to receive notifications

answered Dec 7, 2020 at 11:40

[

![Vergo's user avatar](https://lh3.googleusercontent.com/a-/AOh14GhjBpXMBDa1JG9a9G1P14bzKtDhczKV_IfPB-yb=k-s64)

](/users/14142227/vergo)

[Vergo](/users/14142227/vergo)Vergo

4922 silver badges44 bronze badges

[Add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | [](# "Expand to show all comments on this post")

This answer is useful

0

This answer is not useful

Save this answer.

[](/posts/75517403/timeline)

Show activity on this post.

*   Step 1: rm -rf node\_modules package-lock.json
    
*   Step 2: npm cache clean --force
    
*   Step 3: npm install ( you may need to add --legacy-peer-deps or --force flag, if npm install is not working )
    
*   To start again, npm start
    
*   To make build, npm run build (ssr ) or generate ( csr )
    

[Share](/a/75517403 "Short permalink to this answer")

Share a link to this answer

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this answer](/posts/75517403/edit)

Follow

Follow this answer to receive notifications

answered Feb 21, 2023 at 7:28

[

![Muhammad Binyameen Malik's user avatar](https://i.stack.imgur.com/Cgnr4.jpg?s=64&g=1)

](/users/11121321/muhammad-binyameen-malik)

[Muhammad Binyameen Malik](/users/11121321/muhammad-binyameen-malik)Muhammad Binyameen Malik

13122 silver badges77 bronze badges

[Add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | [](# "Expand to show all comments on this post")

This answer is useful

0

This answer is not useful

Save this answer.

[](/posts/75964323/timeline)

Show activity on this post.

Migrating from `Nuxt 2` to `Nuxt 3`?

Change your `scripts` in `package.json` to not refer to `nuxt-ts` anymore, but just to `nuxt` instead. Example: `"dev": "nuxt-ts",` -> `"dev": "nuxt dev",`, `"generate": "nuxt-ts generate",` -> `"generate": "nuxt generate",`, etc.

[Share](/a/75964323 "Short permalink to this answer")

Share a link to this answer

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this answer](/posts/75964323/edit)

Follow

Follow this answer to receive notifications

answered Apr 8, 2023 at 9:11

[

![Daniel Danielecki's user avatar](https://i.stack.imgur.com/FulXc.jpg?s=64&g=1)

](/users/11127383/daniel-danielecki)

[Daniel Danielecki](/users/11127383/daniel-danielecki)Daniel Danielecki

9,21466 gold badges7373 silver badges101101 bronze badges

[Add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | [](# "Expand to show all comments on this post")

This answer is useful

0

This answer is not useful

Save this answer.

[](/posts/76829640/timeline)

Show activity on this post.

after installing the project. You need to install packages in package.json

[Share](/a/76829640 "Short permalink to this answer")

Share a link to this answer

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this answer](/posts/76829640/edit)

Follow

Follow this answer to receive notifications

answered Aug 3, 2023 at 15:38

[

![Александр's user avatar](https://www.gravatar.com/avatar/a5d846cb68bf5f878d02ad38ee2c988d?s=64&d=identicon&r=PG&f=y&so-version=2)

](/users/21677653/%d0%90%d0%bb%d0%b5%d0%ba%d1%81%d0%b0%d0%bd%d0%b4%d1%80)

[Александр](/users/21677653/%d0%90%d0%bb%d0%b5%d0%ba%d1%81%d0%b0%d0%bd%d0%b4%d1%80)Александр

1

[Add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | [](# "Expand to show all comments on this post")

This answer is useful

\-3

This answer is not useful

Save this answer.

[](/posts/68969654/timeline)

Show activity on this post.

It simply means nuxt is not installed.

Try running `npm install nuxt`

[Share](/a/68969654 "Short permalink to this answer")

Share a link to this answer

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this answer](/posts/68969654/edit)

Follow

Follow this answer to receive notifications

answered Aug 29, 2021 at 3:39

[

![Shakil Alam's user avatar](https://i.stack.imgur.com/2MaGL.png?s=64&g=1)

](/users/10120649/shakil-alam)

[Shakil Alam](/users/10120649/shakil-alam)Shakil Alam

38844 silver badges1111 bronze badges

[Add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | [](# "Expand to show all comments on this post")

This answer is useful

\-4

This answer is not useful

Save this answer.

[](/posts/58190901/timeline)

Show activity on this post.

Install globally cross-env: `npm install -g cross-env`

Then just update package.json scripts to start with "cross-env ...."

example:

    "scripts": {
        "dev": "cross-env nuxt",
        "build": "cross-env nuxt build",
        "start": "cross-env nuxt start",
        "generate": "cross-env nuxt generate",
        "lint": "eslint --ext .js,.vue --ignore-path .gitignore ."
    },
    

This works on my Windows 10.

[Share](/a/58190901 "Short permalink to this answer")

Share a link to this answer

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this answer](/posts/58190901/edit)

Follow

Follow this answer to receive notifications

answered Oct 1, 2019 at 19:10

[

![Petar's user avatar](https://lh5.googleusercontent.com/-j_68KALdcAw/AAAAAAAAAAI/AAAAAAAAC58/54uxakl5TL0/photo.jpg?sz=64)

](/users/5622862/petar)

[Petar](/users/5622862/petar)Petar

111 bronze badge

1

*   3
    
    what does cross-env have to do with nuxt being undefined?
    
    – [Blowsie](/users/370286/blowsie "40,329 reputation")
    
    [Apr 6, 2020 at 10:38](#comment108019201_58190901)
    

[Add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | [](# "Expand to show all comments on this post")

  

Your Answer
-----------

StackExchange.ifUsing("editor", function () { StackExchange.using("externalEditor", function () { StackExchange.using("snippets", function () { StackExchange.snippets.init(); }); }); }, "code-snippets"); StackExchange.ready(function() { var channelOptions = { tags: "".split(" "), id: "1" }; initTagRenderer("".split(" "), "".split(" "), channelOptions); StackExchange.using("externalEditor", function() { // Have to fire editor after snippets, if snippets enabled if (StackExchange.settings.snippets.snippetsEnabled) { StackExchange.using("snippets", function() { createEditor(); }); } else { createEditor(); } }); function createEditor() { StackExchange.prepareEditor({ useStacksEditor: false, heartbeatType: 'answer', autoActivateHeartbeat: false, convertImagesToLinks: true, noModals: true, showLowRepImageUploadWarning: true, reputationToPostImages: 10, bindNavPrevention: true, postfix: "", imageUploader: { brandingHtml: "Powered by \\u003ca href=\\"https://imgur.com/\\"\\u003e\\u003csvg class=\\"svg-icon\\" width=\\"50\\" height=\\"18\\" viewBox=\\"0 0 50 18\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003e\\u003ctitle\\u003eImgur Logo\\u003c/title\\u003e\\u003cpath d=\\"M46.1709 9.17788C46.1709 8.26454 46.2665 7.94324 47.1084 7.58816C47.4091 7.46349 47.7169 7.36433 48.0099 7.26993C48.9099 6.97997 49.672 6.73443 49.672 5.93063C49.672 5.22043 48.9832 4.61182 48.1414 4.61182C47.4335 4.61182 46.7256 4.91628 46.0943 5.50789C45.7307 4.9328 45.2525 4.66231 44.6595 4.66231C43.6264 4.66231 43.1481 5.28821 43.1481 6.59048V11.9512C43.1481 13.2535 43.6264 13.8962 44.6595 13.8962C45.6924 13.8962 46.1709 13.2535 46.1709 11.9512V9.17788Z\\"/\\u003e\\u003cpath d=\\"M32.492 10.1419C32.492 12.6954 34.1182 14.0484 37.0451 14.0484C39.9723 14.0484 41.5985 12.6954 41.5985 10.1419V6.59049C41.5985 5.28821 41.1394 4.66232 40.1061 4.66232C39.0732 4.66232 38.5948 5.28821 38.5948 6.59049V9.60062C38.5948 10.8521 38.2696 11.5455 37.0451 11.5455C35.8209 11.5455 35.4954 10.8521 35.4954 9.60062V6.59049C35.4954 5.28821 35.0173 4.66232 34.0034 4.66232C32.9703 4.66232 32.492 5.28821 32.492 6.59049V10.1419Z\\" /\\u003e\\u003cpath fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M25.6622 17.6335C27.8049 17.6335 29.3739 16.9402 30.2537 15.6379C30.8468 14.7755 30.9615 13.5579 30.9615 11.9512V6.59049C30.9615 5.28821 30.4833 4.66231 29.4502 4.66231C28.9913 4.66231 28.4555 4.94978 28.1109 5.50789C27.499 4.86533 26.7335 4.56087 25.7005 4.56087C23.1369 4.56087 21.0134 6.57349 21.0134 9.27932C21.0134 11.9852 23.003 13.913 25.3754 13.913C26.5612 13.913 27.4607 13.4902 28.1109 12.6616C28.1109 12.7229 28.1161 12.7799 28.121 12.8346C28.1256 12.8854 28.1301 12.9342 28.1301 12.983C28.1301 14.4373 27.2502 15.2321 25.777 15.2321C24.8349 15.2321 24.1352 14.9821 23.5661 14.7787C23.176 14.6393 22.8472 14.5218 22.5437 14.5218C21.7977 14.5218 21.2429 15.0123 21.2429 15.6887C21.2429 16.7375 22.9072 17.6335 25.6622 17.6335ZM24.1317 9.27932C24.1317 7.94324 24.9928 7.09766 26.1024 7.09766C27.2119 7.09766 28.0918 7.94324 28.0918 9.27932C28.0918 10.6321 27.2311 11.5116 26.1024 11.5116C24.9737 11.5116 24.1317 10.6491 24.1317 9.27932Z\\"/\\u003e\\u003cpath d=\\"M16.8045 11.9512C16.8045 13.2535 17.2637 13.8962 18.2965 13.8962C19.3298 13.8962 19.8079 13.2535 19.8079 11.9512V8.12928C19.8079 5.82936 18.4879 4.62866 16.4027 4.62866C15.1594 4.62866 14.279 4.98375 13.3609 5.88013C12.653 5.05154 11.6581 4.62866 10.3573 4.62866C9.34336 4.62866 8.57809 4.89931 7.9466 5.5079C7.58314 4.9328 7.10506 4.66232 6.51203 4.66232C5.47873 4.66232 5.00066 5.28821 5.00066 6.59049V11.9512C5.00066 13.2535 5.47873 13.8962 6.51203 13.8962C7.54479 13.8962 8.0232 13.2535 8.0232 11.9512V8.90741C8.0232 7.58817 8.44431 6.91179 9.53458 6.91179C10.5104 6.91179 10.893 7.58817 10.893 8.94108V11.9512C10.893 13.2535 11.3711 13.8962 12.4044 13.8962C13.4375 13.8962 13.9157 13.2535 13.9157 11.9512V8.90741C13.9157 7.58817 14.3365 6.91179 15.4269 6.91179C16.4027 6.91179 16.8045 7.58817 16.8045 8.94108V11.9512Z\\"/\\u003e\\u003cpath d=\\"M3.31675 6.59049C3.31675 5.28821 2.83866 4.66232 1.82471 4.66232C0.791758 4.66232 0.313354 5.28821 0.313354 6.59049V11.9512C0.313354 13.2535 0.791758 13.8962 1.82471 13.8962C2.85798 13.8962 3.31675 13.2535 3.31675 11.9512V6.59049Z\\" /\\u003e\\u003cpath d=\\"M1.87209 0.400291C0.843612 0.400291 0 1.1159 0 1.98861C0 2.87869 0.822846 3.57676 1.87209 3.57676C2.90056 3.57676 3.7234 2.87869 3.7234 1.98861C3.7234 1.1159 2.90056 0.400291 1.87209 0.400291Z\\" fill=\\"#1BB76E\\"/\\u003e\\u003c/svg\\u003e\\u003c/a\\u003e", contentPolicyHtml: "User contributions licensed under \\u003ca href=\\"https://stackoverflow.com/help/licensing\\"\\u003eCC BY-SA\\u003c/a\\u003e \\u003ca href=\\"https://stackoverflow.com/legal/acceptable-use-policy\\"\\u003e(content policy)\\u003c/a\\u003e", allowUrls: true }, onDemand: true, discardSelector: ".discard-answer", enableTables: true, isStacksEditorPreviewEnabled: false ,enableTables:true,enableSnippets:true }); } });

**Reminder:** Answers generated by artificial intelligence tools are not allowed on Stack Overflow. [Learn more](/help/ai-policy)

Thanks for contributing an answer to Stack Overflow!

*   Please be sure to _answer the question_. Provide details and share your research!

But _avoid_ …

*   Asking for help, clarification, or responding to other answers.
*   Making statements based on opinion; back them up with references or personal experience.

To learn more, see our [tips on writing great answers](/help/how-to-answer).

Draft saved

Draft discarded

 

### Sign up or [log in](/users/login?ssrc=question_page&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions%2f55997850%2ferror-in-running-nuxt-project-nuxt-is-not-recognized-as-an-internal-or-exter%23new-answer)

StackExchange.ready(function () { StackExchange.helpers.onClickDraftSave('#login-link'); });

Sign up using Google

Sign up using Facebook

Sign up using Email and Password

  Submit

### Post as a guest

Name

Email

Required, but never shown

StackExchange.ready( function () { StackExchange.openid.initPostLogin('.new-post-login', 'https%3a%2f%2fstackoverflow.com%2fquestions%2f55997850%2ferror-in-running-nuxt-project-nuxt-is-not-recognized-as-an-internal-or-exter%23new-answer', 'question\_page'); } );

### Post as a guest

Name

Email

Required, but never shown

Post Your Answer Discard

By clicking “Post Your Answer”, you agree to our [terms of service](https://stackoverflow.com/legal/terms-of-service/public) and acknowledge you have read our [privacy policy](https://stackoverflow.com/legal/privacy-policy).

Not the answer you're looking for? Browse other questions tagged

*   [vue.js](/questions/tagged/vue.js "show questions tagged 'vue.js'")
*   [nuxt.js](/questions/tagged/nuxt.js "show questions tagged 'nuxt.js'")

or [ask your own question](/questions/ask).


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------