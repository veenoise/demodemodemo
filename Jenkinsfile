pipeline {
    agent any

    stages {
        stage('PR Only Check') {
            echo hi
        }
    }
    post {
        always {
            echo -e "BRANCH_NAME: ${BRANCH_NAME}\nBUILD_NUMBER: ${BUILD_NUMBER}"
        }
    }
}
