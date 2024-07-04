### TTRPG APP ENTITIES

## User
id - Unique user identificator;
email - used for contacts and (possibly) authentication. Unique field. User should activate created account using email with confirmation link and all "secure" operations should be confirmed using email. Also user could recieve messages through the email;
password - used for authentication, hashed securely;
username - used for authentication, also used for the communication in chat /forum. Unique field;
status - account status, used to properly handle user account (activate, de-activate, etc);
creation date - standard field;
updation date - standard field;
avatar/profile picture - add a flavor to a user;
friends - list of friend account links, used for social networking features;
groups/guilds - list of groups/guilds, used for social networking features;
chats - chat history, used for social networking features;

profilePlayerId - link between account and player profile;
profileGmId - link between account and game master profile;

## Player
id 
accountId
ratingPlayer
feedbackGm
statisticsPlayer
historyPlayer
rewardsPlayer
xpPlayer
characterList
prefferencesPlayer
searchPresetsPlayer
schedulePlayer

## Game master
id
accountId
ratingGm
feedbackGm
statisticsGm
historyGm
rewardsGm
xpGm
homebrewList
prefferencesGm
searchPresetsGm
scheduleGm

