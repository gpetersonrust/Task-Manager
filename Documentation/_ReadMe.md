# Task Manager Application with DevOps

This guide will walk you through the steps to create a task manager application using Node.js, Express, EJS, Prisma, and AWS with a DevOps approach.

## Project Setup

1. Create a new folder for your task manager project and navigate to it.
2. Initialize a new Node.js project using `npm init` and follow the prompts to set up your `package.json`.
3. Install necessary dependencies such as Express, EJS, Prisma, and other required packages using `npm install`.

## Version Control with Git

4. Initialize a Git repository in your project folder using `git init`.
5. Create a `.gitignore` file to exclude unnecessary files and folders from version control (e.g., node_modules/).
6. Add your project files to the Git repository using `git add .` and commit the changes using `git commit -m "Initial commit"`.

## Express Setup

7. In your project, create an `app.js` or `index.js` file to set up your Express application.
8. Import necessary modules, such as Express and other dependencies.
9. Set up the Express middleware to parse incoming requests (e.g., bodyParser for parsing JSON and form data).
10. Create routes for your application, such as displaying tasks, adding tasks, and marking tasks as completed.

## EJS Setup

11. Install EJS as a dependency using `npm install ejs`.
12. Create a folder named `views` in your project directory.
13. Within the `views` folder, create EJS templates for displaying the list of tasks and adding new tasks.

## Prisma Setup

14. Install Prisma as a development dependency using `npm install prisma --save-dev`.
15. Configure your Prisma data model in the `prisma/schema.prisma` file. This file defines your database schema, including models for tasks with properties like title, description, and status.
16. Run `npx prisma generate` to generate the Prisma client, which will be used to interact with your database.

## Database Setup with Amazon RDS

17. Go to the AWS Management Console and navigate to Amazon RDS.
18. Click on "Create Database" and select the database engine of your choice (e.g., MySQL or PostgreSQL).
19. Configure the database settings, including the instance type, username, and password.
20. Optionally, set up a VPC (Virtual Private Cloud) for secure access to your database.
21. Once the database is created, note down the endpoint (host) URL, database name, username, and password. You will need these for Prisma configuration.

## Prisma Integration with Amazon RDS

22. Update the `prisma/schema.prisma` file to use the Amazon RDS database endpoint and credentials for MySQL or PostgreSQL, based on your choice.

## Database Migration with Amazon RDS

23. After updating the Prisma `datasource` block, run `npx prisma migrate dev` to create and apply the database migration on your Amazon RDS database.

## Jenkins Setup

24. Set up a Jenkins server either on your local machine or on an AWS EC2 instance. You can follow the Jenkins documentation for installation steps.
25. Install necessary plugins for Node.js projects and integrate Jenkins with Git by adding your Git repository URL.

## Continuous Integration (CI)

26. Configure Jenkins to perform CI by setting up a build job.
27. Define build steps in the Jenkins job to install dependencies (`npm install`) and run tests (`npm test`). Ensure that your test script is properly set up in your package.json.

## Continuous Deployment (CD) with AWS

28. Set up an AWS Elastic Beanstalk environment for your task manager application.
29. Configure the Elastic Beanstalk environment to deploy your app automatically from the Git repository on successful CI builds.
30. Ensure that your Jenkins CI job triggers the deployment to AWS Elastic Beanstalk upon successful builds.

## VS Code Integration with AWS

31. Install the AWS Toolkit extension for Visual Studio Code, which allows you to interact with AWS services directly from VS Code.
32. Use the AWS Toolkit to manage AWS resources, access AWS services, and deploy your task manager application to Elastic Beanstalk.

With these steps completed, you'll have a full-stack task manager application using Express, EJS, Prisma, and a managed database on Amazon RDS, integrated with Jenkins for CI/CD, and deployable to AWS Elastic Beanstalk. Your task manager application will allow users to view, add, and manage tasks effectively, while AWS takes care of your infrastructure, scaling, and database management.
