# Contributing

Pull requests welcome. These are mainly notes for myself.

## Releasing a new version

1. Merge in changes
2. Update CHANGELOG.md
3. (if applicable) update screen shot.
   - Take screenshot in simulator
   - Use [this page](https://mockuphone.com/device/iphone12black) to create mockup image
   - Replace in GH mardown editor, set image width to 500px
4. Create tag
    ```
    yarn version --minor
    ```
5. Push up tag
    ```
    git push --follow-tags
    ```
