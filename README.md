# cli-confirm

I was looking for a easy way to confirm the execution of our slightly more
dangerous deployment related npm-scripts and I didn't want to wrap them in
another script, so solutions like inquirer and other simplistic prompts did not
work for me.

## Usage

**package.json** of your project
```
[…]
  "scripts" {
    "self-destruct-servers": "cli-confirm \"Do you really want to blow up the servers?\" && npm run destroy:servers",
  }
[…]
```

If you run this script now, you will see something this:

```
$ npm run self-destruct-server
Do you really want to blow up the servers? n

$ npm run self-destruct-server
Do you really want to blow up the servers? y
servers decommissioned permanently
```
