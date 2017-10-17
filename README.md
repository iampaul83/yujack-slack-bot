# yujack 的 slackbot 教學練習

https://yu-jack.github.io/2017/10/14/Slack-Bot/

這個 repo 會自動部署到 [heroku](https://www.heroku.com/)
heroku 可以直接 connection github
然後部署 github 的專案

## Bootstrap

You need to setup the `TOKEN` environment variable, which is Slack App's Verification Token, otherwise your request will not pass.

You can setup it in .env file, in your system's environment or something like Heroku's [config vars](https://devcenter.heroku.com/articles/config-vars#setting-up-config-vars-for-a-deployed-application)
