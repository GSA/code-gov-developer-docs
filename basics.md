---
layout: default
title: API Basics
nav: basics
---

### API basics

The Code.gov API is a GET API. With this API you will be able to explore the software projects that federal agencies have published in compliance with the [Federal Source Code Policy](https://code.gov/#/policy-guide/docs/overview/introduction).

There are two basic endpoints:

- `/repos`: this endpoint will let you query all federal repositories that have been indexed by us.
- `/terms`: this endpoint will let you query all terms we have indexed as part of our data harvesting process. These terms will help you in your search efforts.

#### Additional Notes

The rate limits for the API are currently 5,000 calls/day and 5 calls per 5 seconds. As we go forward and understand the impact of usage of the API, we will adjust the limits accordingly as well as allow for individual users with specific needs to have customized rate limits appropriate to their use.

#### Example URL

The below URLs are for initial browsing of API data. This DEMO_KEY will not work after a certain number of attempts. User can  request a personal key from [api.data.gov](https://api.data.gov/signup/). The personal key will have more data access capabilities.

* [https://api.code.gov/repos?api_key=DEMO_KEY](https://api.code.gov/repos?api_key=DEMO_KEY)
* [https://api.code.gov/terms?api_key=DEMO_KEY](https://api.code.gov/terms?api_key=DEMO_KEY)

#### Output

The output data will be in JSON format.

#### API Clients

We have a couple of API clients on our roadmap.

##### Javascript

- [GSA/code-gov-api-client](https://github.com/GSA/code-gov-api-client)
  - Currently in alpha
  - [NPM @code.gov/api-client](https://www.npmjs.com/package/@code.gov/api-client)
  - [Feedback](https://github.com/GSA/code-gov-api-client/issues/new): Leave us your feedback as a Github Issue!

<body id="basics"></body>
