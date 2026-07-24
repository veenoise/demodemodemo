pipeline {
    agent any

    stages {
        stage('PR Only Check') {
            steps {
                sh 'echo "hi"'
                sh 'echo "hello"'
            }
        }
    }
    post {
        always {
            sh 'echo -e "BRANCH_NAME: ${CHANGE_BRANCH}\nBUILD_NUMBER: ${BUILD_NUMBER}"'
        }
    }
}
