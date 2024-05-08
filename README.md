# HCS Website 2024

Welcome! This is the most recent version of the Harvard Computer Society website, currently deployed at [hcs.harvard.edu](https://hcs.harvard.edu). 

Please reach out to [presidents@hcs.harvard.edu](mailto:presidents@hcs.harvard.edu) with any questions, comments, or concerns.

## Local Development

The following instructions provide guidance on building and deploying the website locally.

### Prerequisites

In order to build and run this project, you will need to have Node.js installed.

[Node.js Installation Instructions](https://nodejs.org/en)

### Installing

After installing Node.js, `cd` into the repository and run:

    npm install

This will install all of the necessary dependencies. To run the project locally, run:

    npm run dev

To compile the project for deployment run:

    npm run build

## Deployment

The HCS website is deployed using [Cloudfront](https://aws.amazon.com/cloudfront/) and an [Amazon S3](https://aws.amazon.com/s3/) bucket. 

After running `npm run build`, a `/out` folder will be created. To deploy the project on [hcs.harvard.edu](https://hcs.harvard.edu):
 - Navigate to the `hcs-2024-website` [Amazon S3 bucket](https://us-east-1.console.aws.amazon.com/s3/buckets/hcs-2024-website?region=us-east-1&bucketType=general&tab=objects)
 - Delete all of the objects currently in the bucket
 - Upload the contents of the `/out` folder to the root of the bucket

This will update the website deployment within 24 hours. To accelerate this process, you can [invalidate the Cloudfront cache](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html).

## Built With

  - [Next.js](https://nextjs.org/) 
  - [Radix UI](https://www.radix-ui.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - And more!

## Authors

This website was built by [Jackson Moody](https://www.jacksonmoody.com/) in Spring of 2024. Feel free to [reach out](mailto:jacksonmoody@college.harvard.edu) if you have any questions!
