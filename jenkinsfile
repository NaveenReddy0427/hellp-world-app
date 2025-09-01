pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

         stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

         stage('Test') {
            steps {
                sh 'echo "Running tests..."'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Building Hello World app..."'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                pkill -f "node app.js" || true
                nohup npm start > app.log 2>&1 &
                '''
            }
        }
    }
}
