pipeline {
    agent any

    stages {
        stage('PR Only Check') {
            steps {
                sh 'echo "hi"'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'trivy fs . --exit-code 1 -s MEDIUM,HIGH,CRITICAL --ignore-unfixed --scanners vuln,misconfig,secret'
            }
            post {
                failure {
                    sh 'echo failed'
                }
                success {
                    sh 'echo success'
                }
            }
        }

        stage('Check If It Will Proceed On Failure') {
            steps {
                sh 'echo this was triggered!!!'
            }
        }
    }

    post {
        always {
            sh 'echo -e "BRANCH_NAME: ${CHANGE_BRANCH}\nBUILD_NUMBER: ${BUILD_NUMBER}"'
        }
    }
}
