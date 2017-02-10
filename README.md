[ ![Build Status](https://app.codeship.com/projects/b23def40-c932-0134-f742-3a0fd8dae151/status?branch=master)](https://app.codeship.com/projects/199219)
[![Code Climate](https://codeclimate.com/github/yonatanmk/flicklist/badges/gpa.svg)](https://codeclimate.com/github/yonatanmk/flicklist)
[![Coverage Status](https://coveralls.io/repos/github/yonatanmk/flicklist/badge.svg?branch=master)](https://coveralls.io/github/yonatanmk/flicklist?branch=master)

# SchwamIt

## Overview

[FlickList](https://flicklist.herokuapp.com) is a web app for organizing movies into those you plan to see and those you have already seen. On the site, users can query The Movie Database API for movies and then add them to movie lists on their profile. Movie list options include "Plan to See", "Already Seen", "Liked", and "Disliked". The site also gives you the ability to view movie lists of other users, and has a recommendation feature that will suggest movies based on the movies you've liked.

###Author: [Yonatan Meschede-Krasa](https://github.com/yonatanmk)

##Features

* This is a site based on user-generated content. All content is publicly available; visitors can see all content, but not submit items, reviews, or vote on reviews. Once a visitor has created an account, they are free to perform these actions.

* The index page automatically updates to show newly posted content in real time.

* Voting on reviews updates the reviews' score in real time, and reviews are reordered based on their score.

* Admins can delete unwanted content as well as delete toxic user accounts.

* Users are notified via email when their items have received a new review.

##Core Technologies

###Stack

* PostgreSQL
* ActiveRecord
* Ruby on Rails
* React.js/Redux
* Foundation

###Test

* RSpec
* Capybara
* Coveralls
* Codeship
* CodeClimate
* FactoryGirl
* DatabaseCleaner

###Gems

* Devise
* Simple Form
* CarrierWave
* Fog
* ReCaptcha
* FontAwesome

###Node Packages

* Lodash
* React
* React-DOM
* React-Redux
* Redux-Thunk
* React-Router
* React-Notify-Toast

###APIs

* The Movie Database API
* TasteKid API
