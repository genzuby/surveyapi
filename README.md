# Survey API server

express
mongodb
mongoose

### Requirements for the Backend

- Server returns a JSON containing:
  - A survey ID
  - A list of questions or pages
- Questions should have three possible formats:
  - Choose a single option from a list (Radio buttons)
  - Choose multiple options from a list (Checkboxes)
  - Text input (i.e. what is your email address)
- Server should save the answers when the user finishes the survey
  - Server should save the answers under that specific survey ID, so that if we decide to change the survey in the future, the answers will not get mixed up

## server start

- npm start

## test

- npm test

## docker repository

- docker pull genzuby/surveyapi

## endpoints

- basic info to set survey : get(http://localhost:4000/surveys)
- get answered user info by userID : get(http://localhost:4000/surveys/:userID)
- get answered user info by userID and surveyID :get(http://localhost:4000/surveys/:userID/:surveyID)
- save user answer : post(http://localhost:4000/answers)
