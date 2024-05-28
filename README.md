# User Interface of the INSPIRE Reference Validator  
  
This repository includes the code of the User Interface (UI) of the [INSPIRE Reference Validator](https://inspire.ec.europa.eu/validator).  
  
# How to contribute to the User Interface of the INSPIRE Reference Validator  
  
The process to contribute to the product and integrate developments into the INSPIRE Reference Validator UI is defined by development guidelines which include issue creation, branch management, code review, and deployment strategies.   
These guidelines are designed to guide users who will contribute to the maintenance and evolution of the INSPIRE Reference Validator UI, promoting collaborative development practices and facilitating community engagement.  
  
  
## 1. Branching strategy  
  
The main branch for development is the `staging` branch. All development work will be based on this `staging` branch.  
  
## 2. Change management process  
  
Changes to the source code must be initiated through an issue creation. The issue must describe the changes to be incorporated in the INSPIRE Reference Validator UI.  
  
## 3. Development workflow  
  
Upon issue creation, a new branch will be created from the `staging` branch, named after the issue (e.g., `issue-xxx`).  
Development work will be carried out on this `issue-xxx` branch.  
  
## 4. Pull Request (PR) process  
  
Once development work is concluded and locally verified, a pull request must be opened targeting the `staging` branch from the `issue-xxx` branch.    
A reviewer will be assigned to the PR to ensure code quality and compliance.  
  
## 5. Review and deployment  
  
The assigned reviewer will check the code for compliance before approving the PR and then merging the branch to the `staging` branch.  
Upon approval, the changes will be deployed to the [Staging environment](http://staging-inspire-validator.eu-west-1.elasticbeanstalk.com/etf-webapp/home/index.html).  
  
## 6. Community verification  
  
The community will be informed about the changes through the issue created initially by the update of the respective issue.  
The community will verify the functionality and compliance of the developments in the [Staging environment](http://staging-inspire-validator.eu-west-1.elasticbeanstalk.com/etf-webapp/home/index.html) by using it and, in case, reporting additional feedback.  
  
## 7. Production release  
  
The `staging` branch will serve as the source for production releases.  
The latest version of the `staging` branch is deployed in the [Staging environment](http://staging-inspire-validator.eu-west-1.elasticbeanstalk.com/etf-webapp/home/index.html). Once proper functioning is ensured and according to the [release strategy](https://github.com/INSPIRE-MIF/helpdesk-validator/tree/master/release%20strategy), the same UI version is propagated to the INSPIRE Reference Validator [Production environment](https://inspire.ec.europa.eu/validator/).
  
