# surajkumar.in

The code for my website. Run the commands below in the VS Code terminal (Terminal → New Terminal), inside this folder.

## 1. Change the content

Almost all the text is in `src/data/profile.ts`. Edit it and save.

## 2. Preview on your Mac

```sh
./preview-start.sh
```

This opens the site at http://localhost:4173. Only you can see it.
After more edits, run `./preview-start.sh` again and refresh the page.

When you're done:

```sh
./preview-stop.sh
```

## 3. Publish

```sh
./publish.sh "What you changed"
```

It checks the site builds, lists the changed files and asks before uploading to GitHub.

## 4. Check it went live

1. **GitHub** builds the site first: https://github.com/sxraj/resume/actions
   - Yellow dot: still building (about 1–2 minutes)
   - Green tick: done
   - Red cross: it failed and the live site did not change. Click it to see why.
2. **Your domain** shows it after the green tick: https://surajkumar.in
   - Press Cmd+Shift+R to reload. Your browser can show the old version for up to 10 minutes.
