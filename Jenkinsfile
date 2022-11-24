pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t dikshit-portfolio .'
            }
        }
        stage('Stop old container') {
            steps {
                sh 'docker rm dikshit-portfolio --force'
            }
        }
        stage('Start New Container') {
            steps {
                sh 'docker run -p 3000:3000 -d --name dikshit-portfolio dikshit-portfolio'
            }
        }
    }
}