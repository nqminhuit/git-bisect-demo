# Setup:

Checkout `master` branch
```shell script
npm install;
npm start;
```

# Simulation feature developments
0. At `master` branch, show the complete working app.
1. checkout and deploy branch `feature/generate-random-string`
2. checkout and deploy branch `feature/sort-by-string-number`
3. checkout and deploy branch `feature/sort-by-string-values`
4. checkout and deploy branch `feature/drop-duplicate-buttons`
5. notice that there is a bug at `Sort by string numbers` which is not sorted
6. at this point there are "too many" commits and we don't know which one caused the bug
7. time for `git bisect`

# Demo `git bisect`

```shel script
git bisect start
git bisect bad
git bisect good <commit_hash_youre_sure_feature_working>
```

At this point git will traverse through commits like binary search to help us find the bad commit:
- If feature is not working as expected, enter command: `$ git bisect bad`
- If feature is working as expected, enter command: `$ git bisect good`

Repeat 2 steps above until git show us the bad commit:
```
865a5e18c47e91dd3a228d925be90848f010cbea is the first bad commit
commit 865a5e18c47e91dd3a228d925be90848f010cbea
Author: Bruce Wayne <bruce@wayne.com>
Date:   Sat Feb 19 14:21:11 2022 +0700

    1: function to sort string value

 src/components/Layout.jsx | 17 ++++++++++++++++-
 1 file changed, 16 insertions(+), 1 deletion(-)
```

We are now aware of the bad commit we can fix it or notify the author and pinpoint the bad commit.

To complete the bisect process, type: `$ git bisect reset`

## Bonus:

To see the currently remaining suspects, type: `$ git bisect visualize`
```
commit 8ebaf37b81f9b456ad56d5caa732fb80262b857a (refs/bisect/bad)
Author: Bruce Wayne <bruce@wayne.com>
Date:   Sat Feb 19 14:38:19 2022 +0700

    1: add layout

commit 7cf3c5a815c5f2bb34c46fa42ea9279d9fb6082b (HEAD, origin/feature/sort-by-string-values, feature/sort-by-string-values)
Author: Bruce Wayne <bruce@wayne.com>
Date:   Sat Feb 19 14:26:08 2022 +0700

    2: remove trailing commas

commit 865a5e18c47e91dd3a228d925be90848f010cbea
Author: Bruce Wayne <bruce@wayne.com>
Date:   Sat Feb 19 14:21:11 2022 +0700

    1: function to sort string value
```

reference: https://git-scm.com/docs/git-bisect
