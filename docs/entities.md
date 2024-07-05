### TTRPG APP ENTITIES

## User
# id 
unique user identificator;

# email 
used for contacts and (possibly) authentication. Unique field. User should activate created account using email with confirmation link and all "secure" operations should be confirmed using email. Also user could recieve messages through the email;

# password 
used for authentication, hashed securely;

# username 
used for authentication, also used for the communication in chat /forum. Unique field;

# status 
account status, used to properly handle user account (activate, de-activate, etc);

# creation 
standard field;

# updation 
standard field;

# avatar/profile 
picture - add a flavor to a user;

# friends 
list of friend account links, used for social networking features;

# groups/guilds 
list of groups/guilds, used for social networking features;

# chats 
chat history, used for social networking features;

# profilePlayerId 
link between account and player profile;

# profileGmId 
link between account and game master profile;

# lastLogin
the time of the last login;

# contactInfo
links to social media and such;

# languages
the list of languages that user could use in games;

# timeZone
the timezone of the user;

## Player
# id 
unique player identificator;

# accountId 
link to the user account;

# ratingPlayer 
player rating based on other players/masters reviews (we need to specify conditions who and when could rate the player to prevent possible abuse). Ratings should also be "non-anonymous", with the link to the rank author;

# feedbackPlayer 
list of feedback messages, messages also should be "non-anonymous" with the link to the author. Maybe we should "combine" feedback with rating score, prompting users not only rate the player, but also leave the message explaining the rating;

# statisticsPlayer 
player statistics, based on the player game history;

# historyPlayer 
game history of the player, with the links to the game. History should allow others to see information like game name, number of sessions played, how the game ended and the reason, information about GM and other players;

# rewardsPlayer 
the list of rewards awarded to this playr by other. Maybe allow a link to the author of the reward and maybe a congratulationary message sent along;

# xpPlayer 
player "experience points" and maybe "player level" based on xp. Players gain xp by achieving some milestones/results and/or submiting some content and spend it to award others and do some other stuff (all ways to generate XP and level milestones should be specified later, same for the ways to "use" XP);

# characterList 
the list of character sheets, which can be used to respond to some games or just share for other to rank and comment;

# prefferencesPlayer 
the list of tags which can help to better identify the prefferences of this player (available tags should be defined later);

# searchPresetsPlayer 
the list of game filter setups which allow player for re-usable and fast way to search and fitler games;

# schedulePlayer 
prefferable play schedule: days and time periods (scheduling shoud be better discussed in the game entity);

## Game master
# id 
unique game master identificator;

# accountId 
link to the user account;

# ratingGm 
GM rating based on other player reviews (we need to specify conditions who and when could rate the GM to prevent possible abuse). Ratings should also be "non-anonymous", with the link to the rank author;

# feedbackGm 
same as the Player feedback, but for the GM;

# statisticsGm 
game statistics based on the game history;

# historyGm 
same as the Player history, but show games which were hosted and mastered by this GM;

# rewardsGm 
same idea as player rewards, but the list of GM rewards should be different (maybe some common rewards, but some rewards only available to the game masters);

# xpGm
same idea as the player XP and level, but maybe the list of actions GM could spend xp on is different;

# homebrewList
the list of game master custom rule sets, because this can vary a lot, we should later think about how to make some general way to specify a homebrew ruleset;

# prefferencesGm
same as player prefferences, but to help players better understand what type of games this GM usually offers;

# searchPresetsGm
same as player presets, but for filtering out players;

# scheduleGm
same as player schedule but for the GM;

## Game
# gameSystem 
The list of game systems, for example: D&D3.5, D&D4, D&D5, PF, PF2, etc;

# gameSetting 
The list of game settings, for example: ForgottenRealms, Greyhawk, etc;

# gameGenres 
list of tags like: Adventure, ActionRPG, Detective, etc;

# gamePriorities 
number of percentiles showing game accents: Combat - 50%, Roleplay - 25%, etc;

# gamePlayerSlotsMin 
minimal number of players for the game;

# gamePlayerSlotsMax
maximal number of players for the game;

# gameObserverSlots
number of observers for the game;

# gameShortDescription 
game description should include several key points: 
    1. Time period; 
    2. Place in the world where the game take place at; 
    3. Short intro explaining the story premise; 
    4. Party motivation and logic behind the group;
    5. Some other info (alignment, etc);

# gameAllowedMaterials 
additional books, addons and supplements that are allowed by the gm. Some filter ideas (not final list, we should discuss them later):
    1. Official books and supplements;
    2. Homebrew rules;

# gameRestrictionsPlayers 
list of restrictions for the players:
    1. Player rating based ones;
    2. Player age based (age is retrieved from the user account);
    3. Player hours played based;
    4. Player game statistics based (%succesfully completed games, % of abscence, etc);
    5. Player cant respond to the game w/o selecting a character (character selection should be discussed later);
    6. Only allow players in the GM friend list / from the GM groups/guild / etc;
    7. Only allow players with specified rewards (list of existing rewards);
    8. Only allow players with specified player prefferenes in their player profile;

# gameRestrictionsCharacters 
list of restrictions for players characters (should be different for different game systems, its not a final list, just some common ideas):
    1. Lists of allowed races, classes, etc (depends on the game system);
    2. Allowed level / level ranges / XP, etc (alose game dependant);
    3. Only allow character lists with character story/background;
    4. Allowed character rating range / number of good feedbacks, etc;

# gameLanguage 
the main language of the game (maybe allow several languages);

# gameFormat 
the game medium (for example - text game using forum/chat, game using audio or game with both audio and video);

# gameTechStack 
the list of software required to play this game (create a list of popular choises like Discord, Roll20, Foundry, and some other apps and tools. Also allow custom ones too);

# gameFrequency 
specify the number of games per period (prepare the list of possible periods like day/week/month, etc);

# gameSessionDuration 
minimal time for a game session (in hours);

# gameSchedule 
available days, and time intervals (intervals can't be less than specified session time). We can allow either same time range for all days, for several days (maybe do something like check marks) or even specify different time periods for each day. Scheduling - one of the main features of this app, so we should think and discuss how to implement it the best way:
   - One possibility I have in mind: when game is created and there are no players yet, game schedule is the same as it was initially set by GM. When player joins (when GM approves player response to a game), game schedule should "update" and show up an intersection of previous (or initial for the first player) schedule and new player schedule. And this way, with each player joining game, schedule "narrows" and prevent situations when players who joined the same game find out later that they can't find time suitable for everyone;
   - Second possibility: players join the game and there is a heatmap that shows the best possible options (days) and for each day (best possible time periods);

# gameFormOnResponse 
optional, if specified it is a the list of questions that player trying to respond to this game would be asked to answer before his request would be sent to the GM;


## Review
# id
unique identifier;

# author
link to either player or game master profile;

# reviewType
type of the review - player review, game master review, maybe even observer review;

# reviewRank
the score of the review

# reviewText
the text of the review