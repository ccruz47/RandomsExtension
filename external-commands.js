(function () {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        var commandData = parseCommand(message);
        if (commandData.isValid) {
            switch (commandData.command) {
                case '!test':
                    client.say(channel, `@${tags.username}, test successful!`);
                    break;
            }
        }
    });
})();
