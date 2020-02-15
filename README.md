This repository simply contains a node script that initializes playwright and uses it to login to stackoverflow.com.
This can be used to obtain the daily visits badges.

It does not consider captcha, as it only runs once or twice a day.

Deploy and run it daily, with crontab or any other resource.
Not suitable for serverless because of the libraries size.