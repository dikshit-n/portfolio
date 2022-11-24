pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t dikshit-portfolio .'
            }
        }
        stage('Stop Old container') {
            steps {
                echo 'docker rm dikshit-portfolio --force'
            }
        }
        stage('Start new container') {
            steps {
                echo 'docker run -p 3001:3000 -d --name dikshit-portfolio dikshit-portfolio'
            }
        }
    }
}