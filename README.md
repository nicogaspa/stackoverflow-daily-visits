This repository simply contains a node script that initializes playwright and uses it to login to stackoverflow.com.
This can be used to obtain the daily visits badges.

It does not consider captcha, as it only runs once or twice a day.

The serverless framework was used to deploy a lambda function and schedule it to run every 12 hours.

1. `npm install -g serverless`
2. update username and password in `handler.js`
3. `serverless deploy`