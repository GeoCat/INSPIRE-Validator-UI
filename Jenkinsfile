#!/usr/bin/env groovy

// The validator image is built by the live_inspire_validator job, which clones
// the staging-geocat branch of this repository. This job only starts that build
// when staging-geocat changes.
node {
    if (env.BRANCH_NAME == 'staging-geocat') {
        stage('Trigger image build') {
            build job: 'live_inspire_validator/main', wait: false
        }
    } else {
        echo "Only staging-geocat triggers an image build, nothing to do for ${env.BRANCH_NAME}"
    }
}
