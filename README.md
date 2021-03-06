# DEPRECATED 
## This project repo is no longer being maintained. Please visit https://open.gsa.gov/api/codedotgov/ to view API documentation for code.gov.



# code-gov-developer-docs

This is the repository for developers.code.gov, the official documentation for the [Code.gov](https://code.gov/) API.

Thanks to CFPB team for creating this model and for furthering open source in government.

## Setup instructions

To get started, clone the repo locally. Then run `bundle exec jekyll serve` and go to http://127.0.0.1:4000/ (or http://localhost:4000/) to run the site on your machine

## Using JavaScript and Bower

If you are going to work on the JavaScript for this site, you need to do the following:

* Run `npm install -g bower` to install Bower.
* Run `npm install -g grunt-cli` to install Grunt.
* Run `npm install` in the directory to install other tools.
* Run `bower install` to install dependencies.
* Run `bundle install` to install additional dependencies. 

After changing the JavaScript, run `grunt` to rebuild the minified JS.

## Deploying

This site is deployed using [Federalist](https://federalist.18f.gov/). A new version of the site is deployed every time new changes are committed to the master branch.

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

## Questions?

If you have questions, please feel free to contact us:  
[Open an Issue](https://github.com/GSA/code-gov-developer-docs/issues)  
[@CodeDotGov on Twitter](https://twitter.com/codedotgov)  
[Send us an email to code at gsa.gov](mailto:code@gsa.gov)  
[LinkedIn](https://www.linkedin.com/company/code-gov?trk=company_home_typeahead_result)   

Or join our #opensource-public channel on Slack: https://chat.18f.gov/
