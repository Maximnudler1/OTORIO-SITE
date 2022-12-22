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
                sh 'npx cypress run --record --key cb50b1c0-d134-4b22-b5d6-05789961f77f'
            }
        }
    }
}