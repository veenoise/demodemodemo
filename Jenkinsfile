pipeline {
    agent any

    stages {
        stage('PR Only Check') {
            echo hi
        }
    }
    post {
        always {
            sh 'echo -e "BRANCH_NAME: ${BRANCH_NAME}\nBUILD_NUMBER: ${BUILD_NUMBER}"'
        }
    }
}
