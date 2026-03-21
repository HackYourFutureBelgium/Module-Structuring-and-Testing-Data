Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
// a small box pops up on the screen displaying your message and an OK button.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
// it displays a dialog box with your message, a text input field, and two buttons: OK and Cancel.
What is the return value of `prompt`?
// the value depends on your action. 1. Click OK with text: returns the entered text as a string. 2. Click OK with no text: Returns an empty string (""). 3. Click cancel or press esc: returns null.
