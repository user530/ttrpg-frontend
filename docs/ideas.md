### TTRPG Project ideas:
1. The main purpose of the TTRPG app is to help people find same minded folk to play favorite games and socialize;
2. The project should start small, focusing on simple core features and, develop more features later, based on the community requirments and feedback;

## CORE FEATURES
1. Social Networking:
    1.1. Friend list with ability to add/remove friends, see player statuses;
    1.2. Groups / "guilds" with ability to join and leave. Groups provide status (maybe xp and awards if we implement it) and dedicated chat/forum channels. Add group chat support for the game sessions;
    1.3. Real time chating capabilities with different channels and DM capabilities;
    1.4. Discussion forum with thematic channels (for different game systems, settings, themes, etc). Add categories and subcategories for better organisation, and maybe some topics for forum type games (text format, not-real time game);
    1.5. Real time notifications via WebSocket;
    1.6. Chats store history (maybe only for a limited time);

2. Profiling feature (each account should have at least one profile, but could have both):
    2.1. User profiles of 2 types: Player and Game master (Storyteller);
    2.2. All profiles should contain "rating" (should think about how to implement it the right way to reduce chances for abusing);
    2.3. All profiles should contain "feedback messages" (users should be able to leave feedback only in specific scenarios, like when the game ends or player leaves);
    2.4. Both rating scores and feedback messages should not be anonimous, so all authenticated users should be able to see an author of the rating score or feedback message, what game this message/score is linked to;
    2.5. All profiles should contain game history (games played for a player and hosted for a GM. Game history should contain information: 
        2.5.1. GM (with the link to the profile);
        2.5.2. All players (with links to the profiles);
        2.5.3. Characters they were playing (with links, if they are added to the player profile in the app));
        2.5.4. Some other single game statistiscs (number of sessions played, etc);
    2.6. All profiles should contain some common statistics (like number of games played, number of times player/gm was abscent w/o warning, percantage of games that succesfully ended, etc);
    2.7. All profiles should contain rewards (all users could purchase "rewards" for the xp and give them to other players);
    2.8. All profiles should contain game prefferences (preffered game systems/settings/tags, etc);
    (STILL UNDER CONSIDERATION, MAYBE MAKE SOME "hidable" in profile settings)
    2.9. All profiles should contain preffered game schedule (like days and time ranges for all/each day);
    2.10. User profiles could also contain a list of characters (Im still not sure about making characters linked to a game system or just making it abstract concept that only covers role aspect of the character, w/o any numbers);
    2.11. Game master profiles could also contain a list of homebrew rules created by this game master;

3. Game feature (+ LFG feature):
    3.1. Player could create, save, modify and delete named game settings "presets" (we discuss game settings later, when discussing the game entities);
    3.2. Player could browse the list of open (game with available player slots and appropriate status) games. He could filter it based on game settings (search form has game setting fields to specify filter, but we should also allow player to load one of his "presets");
    3.3. Player could contact the game master (possibly add ability to contact "as character" providing the character idea player want to present to GM, maybe only allow use this type of contact if GM set that game response requires the character);
    3.4. Player could create, save, modify (only when they are not used in the game) and delete character lists (still not decided do we use them as abstract concept or as specific game character sheets);
    3.5 Game master could create, save, modify and delete player settings "presets" (by player profile rating, age, some player statistic - for example by % of successfully completed games, etc. We discuss theese settings later);
    3.6. Game master could browse the list of players looking for the game. He could filter players based on player settings (same as player filtering open games, we allow presets and manual filtering);
    3.7. Game master could invite player to the game (either as "player" or as "character" if player has some characters in his character list, which GM finds interesting). Also allow kicking players, and changing player role(we should discuss how its done and what happens later);
    3.8. Game master could create, modify (only when the game status allows. If there are some players already joined the game, GM could not change game setting w/o all players consenting to it) and delete games. We discuss game entities in a separate block later;
    3.9. If game requires players to provide character lists, Game master could approve or disapprove suggested character (dissaprove with reason), form and re-form party (parties, if game allows multiple parties) and change player statuses (for example if player changes character or dies);
    3.10. Game master could change game status (Open - gm could invite players to game but its not visible by default, LookingForPlayers - game shows up in the games list and all players could see it, WaitingForStart - game is filled, but still not started, if everything is OK -> he could set status as Active or return back to the LFG if something changes, also add couple of closed statuses for the history to check if game ended normally with all parts agreeing or GM stoped it without good reason);
    3.11. Game master could schedule sessions, set reminders for the players, send notifications (including through e-mail associated with account linked to profile), and add notices to a game notice board. Add visual interface with drag and drop functionality to the scheduler;
    3.12. Add timezone support and automate the process of "matching" player/gm schedules based on each individual time zone;

## Potential features

4. Recomendation system - suggest games / players based on the player/game master prefferences;

5. Character creation tool:
    5.1. Automated character sheets for different game systems;
    5.2. Ability to save/export/print the sheet;

6. Game resources:
    6.1. Digital versions of the popular books/guides and supplements;
    6.2. Templates and tools - common game tools to help players and game masters (cheat sheet to create a character, session outline cheatsheet, random encounter guidelines, etc);
    6.3. Home brew workshop - allow game masters to submit "custom rulesets", rate them, add them to the game, etc;

7. Game app:
    7.1. Allow "separate" vision and "audio" for each tool;
    7.2. Dice rolling, Dice tower and dice log for "hidden" rolls so in the end of the session players could confirm the roll result;
    7.3. Multiple audio channels (everyone, whole party, observers, specific player/observer) and ability to "stack" several audio files into each channel. Easy drag and drop interface, with ability to easy load (from url or file) audio, trim/specify the range and pass to specific audio channel;
    7.4. Ability to add some "automated check" triggers on the map, that fire up when characters show up in the range. Game make automated "hidden" roll for each player, and if player has success he sees something, that others cant see. Hidden "item" could be just a text pop-up, some image prop, or maybe even a sound(?);
    7.5. Ability to make "multi-level" maps with portals. Portal works both with "vision" and movement: rays tracing "through" the portal return the vision of the "other side", and moving through the portal "teleports" tokens to the other side. Maybe even posibility to make 1-way or 2-way portals;
    7.6. Maybe add ability to use first person view to see through the character eyes (2.5d or 3d);
    7.7. Add a mobile device support for the game app (with perfomance optimization);
