pipeline {

    agent any
    tools {nodejs "node"}


    stages {
        stage('Install Dependencies') {
            steps {
                // Install the project dependencies
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Run the Cypress tests
                sh 'npx cypress run'
            }
        }
    }
}