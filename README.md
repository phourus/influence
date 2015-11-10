# Phourus Influence Score
The Phourus Influence Score is an open-source algorithm for estimating the inherent value of a particular article or post. Much like how Google and other search engines use a complex algorithm to determine relevance of a web page to a search term, the Phourus Influence algorithm takes a variety of inputs and determines a relative value of importance based on the response of the community around the content.

Unlike other scoring algorithms, however, the Phourus Influence Score negates the effects of a user's popularity (or lack thereof), and attempts to rank content based solely on the value it provides to it's consumers, rather than the user's popularity.

## Example
An A-list celebrity may get an incredible amount of positive feedback on most posts he/she creates, regardless of the quality of that content. On the other hand, a relatively unknown person may generate some incredible content that reaches a very small group. Normally, content created by the A-lister would be scored much higher than the unknown authors content. This would not be based on the validity or reception of the content, but the user's popularity. The Phourus Influence algorithm is focused on offsetting that effect in order to find great content from unlikely sources.

## The Project
The Phourus Influence Algorithm is an open-source project that can be installed as an NPM module for NodeJS users. Although originally designed for Phourus.com, the communication & collaboration company behind the algorithm, it is versatile enough to be used in other projects, which will ultimately benefit the algorithm in the long run.

# Basics
To better understand the Influence algorithm, it is easiest to explain by expected inputs, expected output, and configuration options, explained below:

## Inputs
When using the Influence algorithm, a variety of inputs are used to determine a post's Influence score:

1. Total Views
2. Total Comments (Eventually with sentiment analysis to determine overall sentiment towards post)
3. Total Upvotes/Downvotes
4. Popularity (Ratio of Upvotes to Downvotes)

### Weights
Influence is a relative score, rather than absolute. The reasoning behind this is that by weighting values against the other posts created by a user, we can start to look at the value of content compared to other posts by the same person, rather than using an absolute value. By passing in weights we can more accurately determine the value of content by enabling users to essentially compete with themselves rather than others.

1. Standard weight: Average post stats for user (views, comments, etc)
2. Default weight: If the user is new to the platform or doesn't have any existing posts to weigh against, the average post of the community can be used instead, to serve as an initial benchmark.

## Configuration
To make the Influence Algorithm a useful, successful open-source project, the algorithm needs to be configurable to the diverse needs of it's users and contributors.  

## Output
The eventual output of the Influence algorithm is an integer between 1 and 100, with 1 being the lowest, 100 being the highest. By sorting posts by the highest Influence to the lowest, content consumers should be able to see what the community has determined to be the best content at the very top, while the least valuable is at the bottom.

# Usage

Terminal

    npm install phourus-influence

Javascript project    

    var Influence = require('phourus-influence');
    Influence.configure({

    });
    var myScore = Influence.calculate(stats, weight);


# Contributing
