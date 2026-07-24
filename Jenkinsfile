pipeline {
    agent any

    stages {
        stage('PR Only Check') {
            steps {
                sh 'echo "hi"'
            }
        }
    }
    post {
        always {
            sh 'echo -e "BRANCH_NAME: ${CHANGE_BRANCH}\nBUILD_NUMBER: ${BUILD_NUMBER}"'
        }
    }
}
